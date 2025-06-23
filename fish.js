// ===== 核心参数说明 =====
// POINT_INTERVAL: 5,       // 水面波纹点的水平间隔（像素）
// FISH_COUNT: 8,           // 基础鱼的数量基准值
// MAX_INTERVAL_COUNT: 50,   // 生成新鱼的时间间隔上限
// INIT_HEIGHT_RATE: 0.5,    // 水面初始高度占容器高度的比例
// THRESHOLD: 50,            // 鼠标互动的影响范围阈值
// SPRING_CONSTANT: 0.03,    // 水面点的弹性系数（弹簧效果强度）
// SPRING_FRICTION: 0.9,     // 水面点运动的摩擦力系数
// WAVE_SPREAD: 0.3,         // 波纹扩散的传递强度
// GRAVITY: 0.4,             // 鱼脱离水面时的重力影响系数

// ===== 美化并修复后的完整代码 =====
var RENDERER = {
  POINT_INTERVAL: 5,
  FISH_COUNT: 6,
  MAX_INTERVAL_COUNT: 50,
  INIT_HEIGHT_RATE: 0.5,
  THRESHOLD: 50,

  init: function () {
    this.setParameters();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  },

  setParameters: function () {
    this.$window = $(window);
    this.$container = $('#flyfish');
    this.$canvas = $('<canvas />');
    this.context = this.$canvas.appendTo(this.$container)[0].getContext('2d');
    this.points = [];
    this.fishes = [];
    this.watchIds = [];
  },

  createSurfacePoints: function () {
    var count = Math.round(this.width / this.POINT_INTERVAL);
    this.pointInterval = this.width / (count - 1);
    this.points.push(new SURFACE_POINT(this, 0));

    for (var i = 1; i < count; i++) {
      var point = new SURFACE_POINT(this, i * this.pointInterval);
      var previous = this.points[i - 1];
      point.setPreviousPoint(previous);
      previous.setNextPoint(point);
      this.points.push(point);
    }
  },

  reconstructMethods: function () {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.startEpicenter = this.startEpicenter.bind(this);
    this.moveEpicenter = this.moveEpicenter.bind(this);
    this.render = this.render.bind(this);
  },

  setup: function () {
    this.points = [];
    this.fishes = [];
    this.clearTimer();
    this.intervalCount = this.MAX_INTERVAL_COUNT;
    this.width = this.$container.width();
    this.height = this.$container.height();
    this.fishCount = (this.FISH_COUNT * this.width) / 500 * (this.height / 500);
    this.$canvas.attr({ width: this.width, height: this.height });
    this.reverse = false;

    this.fishes.push(new FISH(this));
    this.createSurfacePoints();
  },

  watchWindowSize: function () {
    this.clearTimer();
    this.tmpWidth = this.$window.width();
    this.tmpHeight = this.$window.height();
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  },

  clearTimer: function () {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  },

  jdugeToStopResize: function () {
    var width = this.$window.width();
    var height = this.$window.height();
    var stopped = width === this.tmpWidth && height === this.tmpHeight;
    this.tmpWidth = width;
    this.tmpHeight = height;
    if (stopped) this.setup();
  },

  bindEvent: function () {
    this.$window.on('resize', this.watchWindowSize);
    this.$container.on('mouseenter', this.startEpicenter);
    this.$container.on('mousemove', this.moveEpicenter);
  },

  getAxis: function (event) {
    var offset = this.$container.offset();
    return {
      x: event.clientX - offset.left + this.$window.scrollLeft(),
      y: event.clientY - offset.top + this.$window.scrollTop()
    };
  },

  startEpicenter: function (event) {
    this.axis = this.getAxis(event);
  },

  moveEpicenter: function (event) {
    var axis = this.getAxis(event);
    if (!this.axis) this.axis = axis;
    this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
    this.axis = axis;
  },

  generateEpicenter: function (x, y, velocity) {
    if (y < this.height / 2 - this.THRESHOLD || y > this.height / 2 + this.THRESHOLD) return;
    var index = Math.round(x / this.pointInterval);
    if (index < 0 || index >= this.points.length) return;
    this.points[index].interfere(y, velocity);
  },

  controlStatus: function () {
    this.points.forEach(point => point.updateSelf());
    this.points.forEach(point => point.updateNeighbors());

    if (this.fishes.length < this.fishCount && --this.intervalCount === 0) {
      this.intervalCount = this.MAX_INTERVAL_COUNT;
      this.fishes.push(new FISH(this));
    }
  },

  // 修复底部空白的关键：修改水面闭合路径逻辑
  render: function () {
    requestAnimationFrame(this.render);
    this.controlStatus();
    this.context.clearRect(0, 0, this.width, this.height);

    // 半透明水面色
    this.context.fillStyle = 'rgba(128, 128, 128, 0.5)';
    //this.context.fillStyle = 'rgba(64, 164, 151, 0.5)';
    // 鱼身使用发光色（在FISH.prototype.render中修改）
    // 随时间变化的湖水色（在render()中添加）
    //var time = Date.now() * 0.001; // 获取时间（秒）
    //var hue = (Math.sin(time) * 30 + 180) % 360; // 色相循环变化
    //this.context.fillStyle = `hsla(${hue}, 70%, 50%, 0.5)`;


    // 绘制鱼群
    this.fishes.forEach(fish => fish.render(this.context));

    // 使用异或合成模式创建水面切割效果
    this.context.save();
    this.context.globalCompositeOperation = 'xor';
    this.context.beginPath();
    this.context.moveTo(0, this.reverse ? 0 : this.height);

    // 连接水面点
    this.points.forEach(point => point.render(this.context));

    // 修复点：显式闭合到底部边缘
    this.context.lineTo(this.width, this.reverse ? 0 : this.height);
    this.context.lineTo(this.width, this.height); // 延伸到底部右下角
    this.context.lineTo(0, this.height);         // 闭合到左下角
    this.context.closePath();

    this.context.fill();
    this.context.restore();
  }
};

// 水面点物理模型
var SURFACE_POINT = function (renderer, x) {
  this.renderer = renderer;
  this.x = x;
  this.init();
};

SURFACE_POINT.prototype = {
  SPRING_CONSTANT: 0.03,
  SPRING_FRICTION: 0.9,
  WAVE_SPREAD: 0.3,
  ACCELARATION_RATE: 0.01,

  init: function () {
    this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
    this.height = this.initHeight;
    this.fy = 0;
    this.force = { previous: 0, next: 0 };
  },

  setPreviousPoint: function (previous) {
    this.previous = previous;
  },

  setNextPoint: function (next) {
    this.next = next;
  },

  interfere: function (y, velocity) {
    var direction = (this.renderer.height - this.height - y) >= 0 ? -1 : 1;
    this.fy = this.renderer.height * this.ACCELARATION_RATE * direction * Math.abs(velocity);
  },

  updateSelf: function () {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    this.fy *= this.SPRING_FRICTION;
    this.height += this.fy;
  },

  updateNeighbors: function () {
    if (this.previous) this.force.previous = this.WAVE_SPREAD * (this.height - this.previous.height);
    if (this.next) this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
  },

  render: function (context) {
    if (this.previous) {
      this.previous.height += this.force.previous;
      this.previous.fy += this.force.previous;
    }
    if (this.next) {
      this.next.height += this.force.next;
      this.next.fy += this.force.next;
    }
    context.lineTo(this.x, this.renderer.height - this.height);
  }
};

// 鱼类行为模型
var FISH = function (renderer) {
  this.renderer = renderer;
  this.init();
};

FISH.prototype = {
  GRAVITY: 0.4,

  init: function () {
    this.direction = Math.random() < 0.5;
    this.x = this.direction ?
      (this.renderer.width + this.renderer.THRESHOLD) :
      -this.renderer.THRESHOLD;
    this.previousY = this.y;
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

    if (this.renderer.reverse) {
      this.y = this.getRandomValue(this.renderer.height * 0.1, this.renderer.height * 0.4);
      this.vy = this.getRandomValue(2, 5);
      this.ay = this.getRandomValue(0.05, 0.2);
    } else {
      this.y = this.getRandomValue(this.renderer.height * 0.6, this.renderer.height * 0.9);
      this.vy = this.getRandomValue(-5, -2);
      this.ay = this.getRandomValue(-0.2, -0.05);
    }
    this.isOut = false;
    this.theta = 0;
    this.phi = 0;
  },

  getRandomValue: function (min, max) {
    return min + (max - min) * Math.random();
  },

  controlStatus: function () {
    this.previousY = this.y;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.ay;

    // 水面进出检测
    if (this.renderer.reverse) {
      if (this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy -= this.GRAVITY;
        this.isOut = true;
      } else if (this.isOut) {
        this.ay = this.getRandomValue(0.05, 0.2);
        this.isOut = false;
      }
    } else {
      if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy += this.GRAVITY;
        this.isOut = true;
      } else if (this.isOut) {
        this.ay = this.getRandomValue(-0.2, -0.05);
        this.isOut = false;
      }
    }

    // 摆动动作
    if (!this.isOut) {
      this.theta = (this.theta + Math.PI / 20) % (Math.PI * 2);
      this.phi = (this.phi + Math.PI / 30) % (Math.PI * 2);
    }

    // 生成尾迹波纹
    var traceX = this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD;
    this.renderer.generateEpicenter(traceX, this.y, this.y - this.previousY);

    // 边界重置
    if ((this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD) ||
      (this.vx < 0 && this.x < -this.renderer.THRESHOLD)) {
      this.init();
    }
  },

  // 优化鱼的渐变视觉效果
  render: function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    context.scale(1, this.direction ? 1 : -1);

    // 使用径向渐变提升质感
    var gradient = context.createRadialGradient(-30, 0, 0, 0, 0, 40);
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.2)');
    gradient.addColorStop(0.5, 'rgba(0, 255, 64, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 204, 0, 0.2)');
    context.fillStyle = gradient;

    // 鱼身绘制
    context.beginPath();
    context.moveTo(-30, 0);
    context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    context.bezierCurveTo(15, -10, -20, -15, -30, 0);
    context.fill();

    // 鱼尾
    context.save();
    context.translate(40, 0);
    context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(5, 10, 20, 8);
    context.quadraticCurveTo(12, 5, 10, 0);
    context.quadraticCurveTo(12, -5, 20, -8);
    context.quadraticCurveTo(5, -10, 0, 0);
    context.fill();
    context.restore();

    // 鱼鳍
    context.save();
    context.translate(-3, 0);
    context.rotate((Math.PI / 3 + Math.PI / 10 * Math.sin(this.phi)) * (this.renderer.reverse ? -1 : 1));
    context.beginPath();

    if (this.renderer.reverse) {
      context.moveTo(5, 0);
      context.bezierCurveTo(10, 10, 10, 30, 0, 40);
      context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
    } else {
      context.moveTo(-5, 0);
      context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
      context.bezierCurveTo(12, -25, 8, -10, 0, 0);
    }

    context.closePath();
    context.fill();
    context.restore();
    context.restore();

    this.controlStatus();
  }
};

// 启动入口
window.onload = function () {
  RENDERER.init();
};
