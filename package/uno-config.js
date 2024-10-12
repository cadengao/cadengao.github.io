let config = {};
config.uno_remote_managedpath = "managed";
config.uno_app_base = "/package";
config.uno_dependencies = ["/package/helpers.js", "/package/WasmWebSockets.js", "/package/uno.ui.media.js", "/package/setImmediate.js", "/package/Uno.UI.js", "/package/AppManifest.js"];
config.uno_main = "CadenBase";
config.assemblyFileExtension = ".clr";
config.assemblyFileNameObfuscationMode = "Original";
config.mono_wasm_runtime = "/package/dotnet.native.wasm";
config.mono_wasm_runtime_size = 3008775;
config.assemblies_with_size = {"CadenBase.clr":572416,"CommunityToolkit.Mvvm.clr":10240,"CommunityToolkit.Mvvm.pdb":11124,"CommunityToolkit.WinUI.Controls.Primitives.clr":48128,"CommunityToolkit.WinUI.Controls.Primitives.pdb":35456,"CommunityToolkit.WinUI.Extensions.clr":27648,"CommunityToolkit.WinUI.Extensions.pdb":25092,"icudt.dat":1526128,"icudt_CJK.dat":956416,"icudt_EFIGS.dat":550832,"icudt_hybrid.dat":500480,"icudt_no_CJK.dat":1107168,"Microsoft.CSharp.clr":254976,"Microsoft.CSharp.pdb":114608,"Microsoft.Extensions.DependencyInjection.Abstractions.clr":7680,"Microsoft.Extensions.Hosting.Abstractions.clr":6144,"Microsoft.Extensions.Localization.Abstractions.clr":6144,"Microsoft.Extensions.Logging.Abstractions.clr":15360,"Microsoft.IO.RecyclableMemoryStream.clr":39424,"Newtonsoft.Json.clr":396288,"System.clr":5632,"System.Collections.clr":40448,"System.Collections.Concurrent.clr":25600,"System.Collections.Concurrent.pdb":9852,"System.Collections.Immutable.clr":79872,"System.Collections.Immutable.pdb":33992,"System.Collections.NonGeneric.clr":14848,"System.Collections.NonGeneric.pdb":5396,"System.Collections.pdb":15872,"System.Collections.Specialized.clr":16896,"System.Collections.Specialized.pdb":5676,"System.ComponentModel.clr":5632,"System.ComponentModel.pdb":948,"System.ComponentModel.Primitives.clr":14848,"System.ComponentModel.Primitives.pdb":5668,"System.ComponentModel.TypeConverter.clr":140288,"System.ComponentModel.TypeConverter.pdb":59128,"System.Console.clr":16384,"System.Console.pdb":6780,"System.Data.Common.clr":536576,"System.Data.Common.pdb":275000,"System.Diagnostics.DiagnosticSource.clr":26624,"System.Diagnostics.DiagnosticSource.pdb":10100,"System.Diagnostics.TraceSource.clr":10240,"System.Diagnostics.TraceSource.pdb":3672,"System.Drawing.clr":5120,"System.Drawing.pdb":1240,"System.Drawing.Primitives.clr":40960,"System.Drawing.Primitives.pdb":13888,"System.Linq.clr":63488,"System.Linq.Expressions.clr":468992,"System.Linq.Expressions.pdb":224304,"System.Linq.pdb":26608,"System.Linq.Queryable.clr":20480,"System.Linq.Queryable.pdb":6216,"System.Memory.clr":15872,"System.Memory.pdb":5764,"System.Net.Http.clr":153088,"System.Net.Http.pdb":66024,"System.Net.Primitives.clr":8192,"System.Net.Primitives.pdb":1696,"System.Net.Security.clr":10752,"System.Net.Security.pdb":3952,"System.Net.WebSockets.Client.clr":24064,"System.Net.WebSockets.Client.pdb":9660,"System.Net.WebSockets.clr":10240,"System.Net.WebSockets.pdb":2572,"System.ObjectModel.clr":19456,"System.ObjectModel.pdb":6596,"System.pdb":3716,"System.Private.CoreLib.clr":2237952,"System.Private.CoreLib.pdb":1006820,"System.Private.Uri.clr":71680,"System.Private.Uri.pdb":29372,"System.Private.Xml.clr":1609728,"System.Private.Xml.Linq.clr":44544,"System.Private.Xml.Linq.pdb":20332,"System.Private.Xml.pdb":667560,"System.Runtime.InteropServices.JavaScript.clr":45568,"System.Runtime.InteropServices.JavaScript.pdb":23584,"System.Runtime.Numerics.clr":92672,"System.Runtime.Numerics.pdb":47564,"System.Runtime.Serialization.Formatters.clr":8704,"System.Runtime.Serialization.Formatters.pdb":2480,"System.Runtime.Serialization.Primitives.clr":6144,"System.Runtime.Serialization.Primitives.pdb":1580,"System.Security.Cryptography.clr":19968,"System.Security.Cryptography.pdb":8648,"System.Text.Encodings.Web.clr":31232,"System.Text.Encodings.Web.pdb":10576,"System.Text.Json.clr":365056,"System.Text.Json.pdb":174576,"System.Text.RegularExpressions.clr":251904,"System.Text.RegularExpressions.pdb":82024,"System.Web.HttpUtility.clr":10752,"System.Web.HttpUtility.pdb":4224,"System.Xml.Linq.clr":5120,"System.Xml.Linq.pdb":1044,"Uno.clr":440320,"Uno.Core.Extensions.Collections.clr":7168,"Uno.Core.Extensions.Collections.pdb":10644,"Uno.Diagnostics.Eventing.clr":9728,"Uno.Diagnostics.Eventing.pdb":10728,"Uno.Extensions.Core.clr":15872,"Uno.Extensions.Core.pdb":15072,"Uno.Extensions.Core.UI.clr":10240,"Uno.Extensions.Core.UI.pdb":15784,"Uno.Extensions.Hosting.clr":7168,"Uno.Extensions.Hosting.pdb":13028,"Uno.Extensions.Hosting.WinUI.clr":7168,"Uno.Extensions.Hosting.WinUI.pdb":16148,"Uno.Extensions.Navigation.clr":36352,"Uno.Extensions.Navigation.pdb":18548,"Uno.Extensions.Navigation.UI.clr":123904,"Uno.Extensions.Navigation.UI.pdb":46732,"Uno.Extensions.Storage.UI.clr":6144,"Uno.Extensions.Storage.UI.pdb":16080,"Uno.Foundation.clr":89600,"Uno.Foundation.Logging.clr":9216,"Uno.Foundation.Logging.pdb":12120,"Uno.Foundation.pdb":43784,"Uno.Foundation.Runtime.WebAssembly.clr":51200,"Uno.Foundation.Runtime.WebAssembly.pdb":27632,"Uno.pdb":169724,"Uno.UI.clr":8869888,"Uno.UI.Composition.clr":84992,"Uno.UI.Composition.pdb":43080,"Uno.UI.Dispatching.clr":24064,"Uno.UI.Dispatching.pdb":18288,"Uno.UI.FluentTheme.v2.clr":3014144,"Uno.UI.FluentTheme.v2.pdb":1635704,"Uno.UI.MediaPlayer.WebAssembly.clr":43008,"Uno.UI.MediaPlayer.WebAssembly.pdb":21988,"Uno.UI.pdb":3432428,"Uno.UI.RemoteControl.clr":324608,"Uno.UI.RemoteControl.dll.config":28267,"Uno.UI.RemoteControl.Messaging.clr":8704,"Uno.UI.RemoteControl.Messaging.pdb":9440,"Uno.UI.RemoteControl.pdb":103964,"Uno.UI.Runtime.WebAssembly.clr":15872,"Uno.UI.Runtime.WebAssembly.pdb":14116,"Uno.UI.Toolkit.clr":52224,"Uno.UI.Toolkit.pdb":24224,"Uno.Xaml.clr":85504,"Uno.Xaml.pdb":34592};
config.files_integrity = {"./package/dotnet.native.wasm":"sha384-xA6FUb+XqP23epsPitI/0cuN+zUjJOmSdb/Zu86dBmmp4alYF9bNBkJu3lW+sC0Y","./package/managed/CadenBase.clr":"sha384-liO80eSqHPdyHmMSS+5I3FjElt57ahPjt+0q8JNJbWpxWm7JTXnO1zXdAMYHjgmz","./package/managed/CommunityToolkit.Mvvm.clr":"sha384-FgLmARHQXVgTQpdFS8+CaI1dxL0/mIodjTzytsv9okVs9RNkL93++EPbl7XLMYLr","./package/managed/CommunityToolkit.Mvvm.pdb":"sha384-a1z7pr4XKNBJ1+/o5j1hKGm8wEkdu/oEJnlmaYj+xuMBdc3QTI7wo0W1iz1flQjv","./package/managed/CommunityToolkit.WinUI.Controls.Primitives.clr":"sha384-rXIwVWNv9pt+acroyMcm2V+nDkmRCwEzCA6PnGNYWxFnf1KflBp05e2RFXaOW9C/","./package/managed/CommunityToolkit.WinUI.Controls.Primitives.pdb":"sha384-lk/2G1GbrFUz1dsAxk0X26fUngweE2qSIkIkuOLdCgEIa78iA4ehCHBVusJ9ar61","./package/managed/CommunityToolkit.WinUI.Extensions.clr":"sha384-dxPdejrCcHF5BBM3zI07iRiPHMaawi1WJbOVV1PDo4ez12FsKoZD35DoTSj5m8Ty","./package/managed/CommunityToolkit.WinUI.Extensions.pdb":"sha384-TjhuFGvfgNQ1TJSjbl6TooyxEsu0Ux1KbZoUyEOuJ7PY0OSt6+jM5IrzEtsVco4d","./package/managed/icudt.dat":"sha384-VM3XL/F6r3Fy+4KA766ZgsUVhkwZ1VMbapBQif77p2ddCGS+1sWFf7R727m9flX6","./package/managed/icudt_CJK.dat":"sha384-FhX/9p6LUH/zAo0rJ6+oawo+/xx3OHSClrIXCwZOOGNfzNQwUrZuEOTCm3WRzLvi","./package/managed/icudt_EFIGS.dat":"sha384-zTocVG69k/4XJpKl+7KeZVS0CNSpEWD/BoSX0oythPIGwEypTiQITTewNB34kk83","./package/managed/icudt_hybrid.dat":"sha384-AnM4TNOBPFIihVTruRgHLzywwR5rdZy/n08bX6Y3Zfh9BCaugEWmJpOr5fBw0FUX","./package/managed/icudt_no_CJK.dat":"sha384-ydlQl+ygpGpTfYdx1I1XTu6T31yH52ogonM5WJ9xP7Di4igPli2FABLCIYHxlGuB","./package/managed/Microsoft.CSharp.clr":"sha384-mr7L5HqWe2y+pB0YtZfGqeztPpApFQT4uFkj1te3QTiavwVd5Cfl0usZnwAdwxEp","./package/managed/Microsoft.CSharp.pdb":"sha384-FiL0yO55XEn01Xq7J4WJvCObJobIuzIqu0gU/b65SshDjPLtF/wPxrFMEDncDD9O","./package/managed/Microsoft.Extensions.DependencyInjection.Abstractions.clr":"sha384-Ebchv0htGgOuDI96+KxshLToHv+itXquTvWI5UyvZQUc2yySn+SZ/5aLZyrSN+ed","./package/managed/Microsoft.Extensions.Hosting.Abstractions.clr":"sha384-gwWg6dRnfb4Sihj8nM4TOfN/XypKrsDjPW369CalEz22a50pmisKfzQNiKajYDul","./package/managed/Microsoft.Extensions.Localization.Abstractions.clr":"sha384-23eTNkRlLDZUljXr0IXFqLpxZFYfy2ilfofsktXP0ZxJFB+pG5NWf3z4nVXGzsy6","./package/managed/Microsoft.Extensions.Logging.Abstractions.clr":"sha384-5Y0EXjvia8zJ45HTkjpXurJLeIptGQFezKVzruubjjFof6wAPS9Egs6kyOd5siej","./package/managed/Microsoft.IO.RecyclableMemoryStream.clr":"sha384-bchpfCrym3Q7OTzHynPQVvMorylQhLJflniPNNg3UxyoHnLVoUR14prKqSlPkeF+","./package/managed/Newtonsoft.Json.clr":"sha384-ttF17GcR3Rcl/rhXizYESBUvoFPuJa24aqnCVNkrzFvTcNR5OkflMF4EpKb6RE0/","./package/managed/System.clr":"sha384-V/amso2bQCVEQ/FrS8mmYGka4/bMXr6vll2dsSuPO6/W+A1/F92m0KPexs7TzwFj","./package/managed/System.Collections.clr":"sha384-rSSyT0WLXU6V0fgAbZqi6dfGh0sRcN5D/bsj/nsL+kQSr9Sxa9tHxLGji5tTdAKg","./package/managed/System.Collections.Concurrent.clr":"sha384-207YLdBKjwrn7Qj5y/EVu3pv2Iv0Y408zdA7cndbNMmKDFq2M8Qb4Evg13xiwxJb","./package/managed/System.Collections.Concurrent.pdb":"sha384-j7ZQ3EI4bSTsQZG/heERBS8L3VWk2eUxfK9gSlKkT/8r/97qP4OA/gZ639xWBxZn","./package/managed/System.Collections.Immutable.clr":"sha384-pDbKT/gTb0sFPdkczB9hMeljPKacIy3S6R8emfrmS7cBU8OYgnxcvd/nUoERJwUR","./package/managed/System.Collections.Immutable.pdb":"sha384-kKNN5txm5YUqo0idqBJ8fynVwxF3oy3J5eEA919oZSe7n+10SbTrAuM5VQ+X4gat","./package/managed/System.Collections.NonGeneric.clr":"sha384-NLkpKzswRrRAmeB0yyH1cJS79gVkpMkRhqcFsafShhYG9k5DyKbbDFS6wOFh6gFC","./package/managed/System.Collections.NonGeneric.pdb":"sha384-29NvvtDQaxfvMR8djkgDnrLBfsufhhHwHgciAINqt3ErbiDbVIxjd2SoxQF3+teQ","./package/managed/System.Collections.pdb":"sha384-aubm6vcsBIQF5rFgStyRsOD9OrpVSfn91pPeIgCgOV4+i531CxyJJUco5qHN7+eK","./package/managed/System.Collections.Specialized.clr":"sha384-XGWmzyyW3ix4U06I0SGfi++ba65fNVLdXOA5n5azIT6tcAxIjRsOWyNGHlw1vx14","./package/managed/System.Collections.Specialized.pdb":"sha384-4ucyyYRAE+ijqmdUEh+bhmGfM5HsynSKHlTPecGlqX3WGZpB/EqDRXVId3CZBPOp","./package/managed/System.ComponentModel.clr":"sha384-HOazdNtUhWmiz8Ftl09n4ibKejZbMrZH0nZLIYyrHS8LZxvhVdthPTc8Uehwmi2/","./package/managed/System.ComponentModel.pdb":"sha384-ZeaCUJMkoAu25N4ZwykfhI/m1jyMnotqj9nweM2Jyi/r3pd+rvb7tGFx5bHTI9pD","./package/managed/System.ComponentModel.Primitives.clr":"sha384-cr/FQPh8PZmuF6mPXzIPtNHLkPHlpsB2FhuA4v3PTaH16lfHZL3WfzWiquV/jc+f","./package/managed/System.ComponentModel.Primitives.pdb":"sha384-lebqaHNd2JHNndjsDEUr1BXGb9wR6qC22cI+ghGhvwH73dZ7jOui1NLv2tLtdeZX","./package/managed/System.ComponentModel.TypeConverter.clr":"sha384-e45zHAenr7ZTbuyNVghiV/h3DfBULK1eoOPdmecYyqNJusGGmnK7d2g2At5CpbpY","./package/managed/System.ComponentModel.TypeConverter.pdb":"sha384-55EKTFfYpyDh/PLfhoayqO3FjJodX9ZpqboVQwfIXpqQ6ZZNsMwep+EtPiZ5uLxS","./package/managed/System.Console.clr":"sha384-BiwxXK3K/m5QqkUFnO0aLGPFhOqOy1uFV4M+Nlezs+N3iZ4hElMy1YDcocTzqFZW","./package/managed/System.Console.pdb":"sha384-EjOehFoycDCBS6e17IrMbxPUn8o47hLd0wu6ZPKzh/cnhjkERsxK9fEEqRZ5wmo4","./package/managed/System.Data.Common.clr":"sha384-Ifd+bDQAbMJvz0HY3krH9Tl0SEvoQj7No31fGcz9xeNAe6a3dFyAiExeHfA2zGVB","./package/managed/System.Data.Common.pdb":"sha384-hH2rlrKzPWLZCo6cEQpnXRhbbm7BB+UHWvit/7yhrBpG/HYBRsEAwAYx4YaUx+50","./package/managed/System.Diagnostics.DiagnosticSource.clr":"sha384-kiBkvNkIJSP2z9FSTlNlynHKlrZjX7Fc7QyJmF9afyCfJMFz776XEskz3pMoY5zJ","./package/managed/System.Diagnostics.DiagnosticSource.pdb":"sha384-mJwh2HqbtO3gxJO+YJCmh16dyQ2Y9ThnRbqL/Q18MjHyOe8J7Bh3RDvds+8cg16z","./package/managed/System.Diagnostics.TraceSource.clr":"sha384-9Tyb1NM6c/Fqx+XoSXfJ9rP1ALJfBI4N8miy66M2g2NtddjIgCJHBWAGw6Hkw5Uw","./package/managed/System.Diagnostics.TraceSource.pdb":"sha384-sEw31+tfdUx5qqlmybWKxdifkVbpkhKsTNxGCPKQFZYGtn6LL/CBF+ENYqQhX5cZ","./package/managed/System.Drawing.clr":"sha384-fxllZxJesh2fnd8wbJvRscBEUmc7INPa3IYKmRWGwD2KnL5sanqL8EWq7zE1vCTs","./package/managed/System.Drawing.pdb":"sha384-dADBzqbRgNn5S0qfZ0s6gkZCYc0liFKglFWVZ5+oQSRTaCah+cAhWzKGAMV6SjpK","./package/managed/System.Drawing.Primitives.clr":"sha384-5EOnTOiDmgu1uw9uKf5TvVfr8JbAXLyaiGG30tDbeiktsrfAFVnEQGGopWchi3Gz","./package/managed/System.Drawing.Primitives.pdb":"sha384-HKePVeJkl+N3dvOsWWkoPhWTVHFdSuFGbCcW9u9GZmpvTVc5bsaW5/B2HoRVCzBU","./package/managed/System.Linq.clr":"sha384-F+PwlKwmsgIo8ziT0NeH5KzfDFxM2qutAyqMt2pgfoPmmV+srkl6NSQKtNCoKzFF","./package/managed/System.Linq.Expressions.clr":"sha384-DDDwqlRtCnH6Bzx8RUgdtu0tGYUziV5oQ+8V9ah4PTHuWTuYeTh3Vjw3d+5tMzsF","./package/managed/System.Linq.Expressions.pdb":"sha384-zF6Xabzz0JUcCnboMbWxRA5pY+zxd9Sqm0QDcqm92GLk3dwMEcI+07Ck8+eJhzJG","./package/managed/System.Linq.pdb":"sha384-UDf/CvJREDOnYejXuU2C9OkxrwwNd903lcVh1bZ080R4j4JhzcztuXG4OJN9oJ4t","./package/managed/System.Linq.Queryable.clr":"sha384-BMOPkHtrxbzpqwQKAEJFLl/eXTKtnUMcYIwguH9k3nWlw/kDb4a2BBHtUWNXaIss","./package/managed/System.Linq.Queryable.pdb":"sha384-s/nlB+kQCA7SNcMgxM/sAR8G+LvwebAdQMRKmm1nw9iACiA6rjZ54oh0kC6RxlRo","./package/managed/System.Memory.clr":"sha384-nBJwqAAxdfqtkabht4C6TifoDytBOmjOi0R1k0ofewhuxIYQ7nOS4AYVIndnrnge","./package/managed/System.Memory.pdb":"sha384-y9Zq227rhZmexBWYJz3C5q50Nxc5rJwp29TqV8SUQuJhXBoFZP86WnsUF+07EcgN","./package/managed/System.Net.Http.clr":"sha384-q3VqJIX26LrezHtX7j+78krz0QdF4VQjodgP40ZyXW55jUxoGjj0gUDayAOcRV9F","./package/managed/System.Net.Http.pdb":"sha384-ecxRiQYroI8yRt8C/RxV1QCTUpuGQu+VBo0tJZJEgMdguAGwx34CG1ReIXUnH3pz","./package/managed/System.Net.Primitives.clr":"sha384-xPldkf/BDPnZVzi79mBo2mUPM23EsmRSzm3UnMuekQypW/9ycDtRR8VkG8BzmVm/","./package/managed/System.Net.Primitives.pdb":"sha384-PW7fADR/TKVINh6VyOCGCeqVfbOgnyn2sv2GCnlFOKang/sbcydEcDOIRN1pcfIK","./package/managed/System.Net.Security.clr":"sha384-SQRmf2t7ZFoa/Zt+0ZAF8dR2eaFcnirvF27kdXx17yoC3AMVSSH4wGdC7fJkP9nv","./package/managed/System.Net.Security.pdb":"sha384-kpxkgSCRCTmZpAodegicfJafaHAbq25PueIYE4tYLePRdLAMIY9cifPXAlMp7ogW","./package/managed/System.Net.WebSockets.Client.clr":"sha384-KMcaxkkgiKclVsmE43wbiWBB6gac2Me2ZYydCxNWKvfgCa33vpgdYxxcqMwDLE9H","./package/managed/System.Net.WebSockets.Client.pdb":"sha384-A28srYQEcd2szMFBzonscVjzAqZXaVyKI9+Nt3RbOR06ZKioj7OHh6uXDdvARCHw","./package/managed/System.Net.WebSockets.clr":"sha384-/sjhWsgI+Ah4fwE8pXBb/PezBQTXbR57zAvF2wpnIt9nqyWu65ewEgHH6BTm1EFb","./package/managed/System.Net.WebSockets.pdb":"sha384-spPwuu1rSvJ8f4/nteVBm24PoeRVDgKzjp7Y+TTIKll5KHDjfuGfC0/YJ9snT9W/","./package/managed/System.ObjectModel.clr":"sha384-UzSFnjbcf8Hesau+mhImuOZqk8uGGGL3TJP7M1DOdUv+iRg7SXAqah1C1C2zVFhD","./package/managed/System.ObjectModel.pdb":"sha384-lFEdsemPLKa9bsrmpdmbOMFrkgpnj9S2iLRiG7mSZsRukTOxHgyVI6H0qsrE5Any","./package/managed/System.pdb":"sha384-IoFwPep/tplCKddvgXtpbxSG5MXOMqTW2fliOX4G+zBwKaQChXQt0SlhBAbtzZtr","./package/managed/System.Private.CoreLib.clr":"sha384-ftJqoIlx65OX05NdkmK30h07hrJufCSjAQfgMSXykoBRsSsuQNjrrCHt/Ui18ZuM","./package/managed/System.Private.CoreLib.pdb":"sha384-MS/yWQ/qU+jadWjzHdeii/JL/fzd88OLPR5NFjyphyPWUhUNc9e3sJkFYEIJu3CM","./package/managed/System.Private.Uri.clr":"sha384-wLnQFUWHhABatHbD0IJZUKN0HcCAbMmmL0j8+kXhV48Ej+hPjL4yax6EsibmFhJK","./package/managed/System.Private.Uri.pdb":"sha384-y5VmQOMQ/vmDAQ+Q5BSdXINOfN5aVI4nKPiu2od1NMqdj7R1Aw6rKMxC3DejJ7Tx","./package/managed/System.Private.Xml.clr":"sha384-wdKn0HQt2k16vh4TsQNKqZgIZAIw1VWXilZjg4Os9CPjdAhHg/1iwy6Ap7QOQQAa","./package/managed/System.Private.Xml.Linq.clr":"sha384-i5lFB4eF9P2Ghf3hX70NXtr9D5LCFB6njHfL+V+V/v9I2GRV1eKlOSmZarxnA+5i","./package/managed/System.Private.Xml.Linq.pdb":"sha384-kgPaW1lSBgKaifw6GxxKhdtZ/b4iPntePVMKoTAQEu6ONgpX7WIMUTyeGfn+DdxB","./package/managed/System.Private.Xml.pdb":"sha384-SlxDN4mX58n1hK0u6PNabQjsQI8NiDU7jWKgBGnhr7bWWo4F8EAXsPI1h/5ILZAi","./package/managed/System.Runtime.InteropServices.JavaScript.clr":"sha384-5CocMgJK5bdSvZp4mNp7mnAKV6541pDIQ88lULmkpjbbFV+XCeoJ/SGix31dX5/y","./package/managed/System.Runtime.InteropServices.JavaScript.pdb":"sha384-s5hr5uLI7o1tWmLk6tKioEDFcykByTBS6E/n9uwfyLcKviZoWtrTNjBLnx5/o77G","./package/managed/System.Runtime.Numerics.clr":"sha384-PikLb2elHJ564DigDtDRBCsbHAdci1cHygFYm136wUZguokYRteKQDBNhwwGx9g0","./package/managed/System.Runtime.Numerics.pdb":"sha384-lrQVpJbbNSNKQ5HvGcgLiLilwOGSzLJBav7aLowaFaN8LcaBqHnuFoyCHVVuf77q","./package/managed/System.Runtime.Serialization.Formatters.clr":"sha384-4NKFM9mGjBU0gklPTxQ1LZGWmSOZMCueWuRzU8F5/Gn4R92F7fDjofsRXDZ5Dx/V","./package/managed/System.Runtime.Serialization.Formatters.pdb":"sha384-QRU+UtMrkhqxK8tQWEmPuMgfkrVhOKC39ecscDa1Z3d0SBE3IX9A+BAH2pBoqYGm","./package/managed/System.Runtime.Serialization.Primitives.clr":"sha384-l2ERzrif41x38DJJrCx8OVHRNJWt+nfhcZhO2nPYEupLqqfs+WX56fSfobsbelHQ","./package/managed/System.Runtime.Serialization.Primitives.pdb":"sha384-qZPc/yPkhJNgsQ14kPkic7kqXeh5ugISxa4LHMdoFJskXkDVsB7VKv2uL3cx0qha","./package/managed/System.Security.Cryptography.clr":"sha384-FXc84v8O4U3Gk+GH+pmZ79L7RM6Fb8pOdAgDb+XIycAUD5JizWKBoZSbKiiBCd0e","./package/managed/System.Security.Cryptography.pdb":"sha384-MIpqn8pbBxk+98g9hHijR3Hh2VbrX/q50R1pgJDQL5rw2uflTNA+N3g2REBJ3G30","./package/managed/System.Text.Encodings.Web.clr":"sha384-596xEY/Rfj3QNlX8SQjdc5rr2EW9z3yCk5JTTEmKd5HCKXFstZJBSCMbMZafA9Uu","./package/managed/System.Text.Encodings.Web.pdb":"sha384-AQodyMBL7CMXretnZZLgFLcS1atd4aEDCdgJNy41tEUUIyPQVMige21AUlK+1nOi","./package/managed/System.Text.Json.clr":"sha384-1svOx+Fsjuu2b+IORzvEyeq5edSLl1SqOrPevtc/1fVa3j8l8UARLPqE7unvs4Ba","./package/managed/System.Text.Json.pdb":"sha384-LbGk38Uz76o78ZtSycYdfu4RjoHDwOBO+2+ufzzv2KtPXvvYCGFtV2F9iBQWsQCH","./package/managed/System.Text.RegularExpressions.clr":"sha384-zyDZKCgrQVydAJVhbI1vmAelfUWz2Oweb8JKrQj/c74mLfBD0pTHcLqaeyb1+QSF","./package/managed/System.Text.RegularExpressions.pdb":"sha384-jwo+QsJ6U+BGHgdPdG170HRanRYC/H8xB02DIce/+5qp+3y2BJjVJg3YXynvPlIj","./package/managed/System.Web.HttpUtility.clr":"sha384-i7tE1SGhXmeA/FzDkQdmbtXT8Z0XTvRWUIQKhA9GN+3YtzZyhKeTBPr5zEK9Bira","./package/managed/System.Web.HttpUtility.pdb":"sha384-9ZJfRkIITPfgu+sUzZbJVeCmVCJWfldk0W3RaElkFvDtgF6wnhnKLv5dswAJ2UkD","./package/managed/System.Xml.Linq.clr":"sha384-xSrfeHZLaG0R+5xIVwiqzXODywCRAPrPKJzQBCAC7LBQw0h/kFfIVTGDzBp7Ri25","./package/managed/System.Xml.Linq.pdb":"sha384-ErQ/DHzGNbr5FBsLu30cjaHBOpbGtlmRTXJSjzd4lQZBLfAc0luaqmYzkUmh07YB","./package/managed/Uno.clr":"sha384-XWrPvkyVEVhNJZ2wN6Ky8Pe3pPLa1rOO3PdrnbiL5+PctZ4C9UcsG6P2lqIg50Ab","./package/managed/Uno.Core.Extensions.Collections.clr":"sha384-mzFAoDWcI8ofMnV8BJJFTmTgBeDqmlas5kJe12YrGJ4mxJPWzNIr2qKpbqUB30s+","./package/managed/Uno.Core.Extensions.Collections.pdb":"sha384-XEuu0XTyyKVd/C9EXq7RV3FNHUo+EYZ3qwDguKOHQRX5gamaoSS6hwXFtftj7cKw","./package/managed/Uno.Diagnostics.Eventing.clr":"sha384-sJI0/ihgmAiSIIEKKATqJpX1fLE77THIuDymGwKtEE1Di5eje8SVZ3vjGZt50A0g","./package/managed/Uno.Diagnostics.Eventing.pdb":"sha384-DOBEbZHUNrSGvRcWsthgbrlbXrLZeQR3Hebg3KmBDEOQMhE7wGox/rIJSShbw77O","./package/managed/Uno.Extensions.Core.clr":"sha384-Fzn0xnPTuzfMCMouCs/AKu/GZag6lgDEjGjEqOtOotRv7NuuwJ8NY9o5Pff4/SDx","./package/managed/Uno.Extensions.Core.pdb":"sha384-QJOJd9nKAz4VdRZ4pNax84ovrse0jwyNyCics8Hq5fHi4Rmn2Dh2r9HNz9127bxy","./package/managed/Uno.Extensions.Core.UI.clr":"sha384-IeBFdPp8B3napmbapjxGM66bCZRRevYk1gslmdILb0cvRrYi698P/Q7owCRF1L92","./package/managed/Uno.Extensions.Core.UI.pdb":"sha384-m1L/K++k/qQQOT7Pjzuyw9fs3EotHz6Ga+H0unYXTqIinb2l1LdKD0Bi7czKA0aX","./package/managed/Uno.Extensions.Hosting.clr":"sha384-x7nOC+DgmdYQgxzH/NO9LaqxGEDj0stvfY679taTxGlqaIPG2Rl7n4dulaNarGE4","./package/managed/Uno.Extensions.Hosting.pdb":"sha384-VSt7OzH1mw6jZ6o82xzAuXimPGAFGtEnDCqSDGBJio6nY3W8lEIHMALoTMzNi/lE","./package/managed/Uno.Extensions.Hosting.WinUI.clr":"sha384-RHWLjOiMs/HzWBdn13GnVicQlMaHykMSrKlfynkvYoEVz/4M0r177ajCueewDdw7","./package/managed/Uno.Extensions.Hosting.WinUI.pdb":"sha384-THHFqInYX3cY0fNjDQBh/d3iWiHfgvZcPbhYgr/QAlUoY6l5Bz5wEDJpZxS0Ni1C","./package/managed/Uno.Extensions.Navigation.clr":"sha384-VVCSPwIs30ed3DLK1h+wKnCQzagWq4ugo/uYCIPRmkgmAwNYWVhsF7zd9XBGgLqO","./package/managed/Uno.Extensions.Navigation.pdb":"sha384-Ise2Bgz2K5YLEISVCWO+egss9ce0L8tDV41aYmnxT5PZEVEP3MARMQlJiLsXfIK5","./package/managed/Uno.Extensions.Navigation.UI.clr":"sha384-UIYiApEA26f0GMenvqNmIX5ifkil5K/FlUNRgussA/GTo1JDhwsL/vtrR9coxKcM","./package/managed/Uno.Extensions.Navigation.UI.pdb":"sha384-A7HyqSF8/iYRL7yByZu7ILN9PerfKhjvISb7ANwoxXoiExk9NUeh1AB05FBfuUEJ","./package/managed/Uno.Extensions.Storage.UI.clr":"sha384-80oKif2yI6qp3kEgoWd4XVsadJa4s0x9KDf4s7Hi5yF9u5OIBs85HI7SpYJtmkdM","./package/managed/Uno.Extensions.Storage.UI.pdb":"sha384-EAOMtf3dwi9gEXBOQMU8Y+j1V0B24ATl5tB0ZaVk3PfaZ2mVTrq3Cvy+7feiYmgD","./package/managed/Uno.Foundation.clr":"sha384-0qtw1735WAamIHXofZ1ahxduPQxHxHdN7BfhQl88yZPyraf92+4v1BSk/kRmZMJm","./package/managed/Uno.Foundation.Logging.clr":"sha384-/U+3opgf2OrNZjvGSaI5VJlqtFUEr0sCuBjMYWR3c4HJdO23YHqyTzSMOpyeyf/v","./package/managed/Uno.Foundation.Logging.pdb":"sha384-gNLwKMtffumZ2e9cQmm4AXgatMPUdMqcFTUGjNis6yBQzpVuoLuSrtstxi5/g+wi","./package/managed/Uno.Foundation.pdb":"sha384-x82/Eu7p/MW9UyWVCjJhbxAEN0kAH2mXyMytqWzD3Y/b0S+Sm7irjWDd19qKJIYf","./package/managed/Uno.Foundation.Runtime.WebAssembly.clr":"sha384-Td3j3WbtIguT9dN3bDMh1qhl+YO8WbOS5wDu27sHzQG2ettD+goHMUULMJ3F3HIi","./package/managed/Uno.Foundation.Runtime.WebAssembly.pdb":"sha384-nMJgFa3PNfnjsB0G4uchMpLEYTq6KGoA9Pr2zcPMwxFu5e+RpAcz0S3Nqwjd2Va0","./package/managed/Uno.pdb":"sha384-PCmnlHVXCHafHtO+0eCVCJq4lfsKYR3Zks/rpqRmfSHuqDJRDOup3NoDOh2d0C0r","./package/managed/Uno.UI.clr":"sha384-wHoI0RxhI82/u2z5BlwYFK6iCtPz7dPGU2XHh9F28T9ih1Wp3wYX0/6Pe+ykTxof","./package/managed/Uno.UI.Composition.clr":"sha384-JigaS2Ewoof3CKSblX/eUSBmHrbu8TEJKiMg1rvnyCS3TBxe4CEOTLQ0ssMSin6t","./package/managed/Uno.UI.Composition.pdb":"sha384-EL5SZ5WWkbvYfckmUywLCReMe061YCGlHuj534rrsg2l52uK5aVyGQlkR5GDsE4Q","./package/managed/Uno.UI.Dispatching.clr":"sha384-5Rxtlme8rKMKP0Jz4kCkWzyGxCz/Zk2j19O/vkxGrE+dIbrsjFJmGrzXh3oyKhlF","./package/managed/Uno.UI.Dispatching.pdb":"sha384-gVOEEVT+IE/VH2A6eDEkBkOUbQ9w5gK2C9tnQxu8/mh1bsgp3TZXg0z+wkWs6E/s","./package/managed/Uno.UI.FluentTheme.v2.clr":"sha384-AwLcygCs8hg5QUBSZ/3DL1zYSBPrAtSd7t8Rw11WSFayb9Q56w2+iOwuW9GjLxyR","./package/managed/Uno.UI.FluentTheme.v2.pdb":"sha384-oIz4FwMI0cb2ogGaj6ZhZaUdq3XxSchYsocSQKf4CO1KUNSVY4m4TDF4xxsxgc/4","./package/managed/Uno.UI.MediaPlayer.WebAssembly.clr":"sha384-pufSGu7Ugj18uZNViAxSjPhHS8Tq4fsEwjW+qbBsTrqJ4KXF6vLGWbcQbKnoimVn","./package/managed/Uno.UI.MediaPlayer.WebAssembly.pdb":"sha384-+PhYpbdEpkqb01ewVzRuVIXYwAJgv2aik1bd4Cw8p9/z3VwdFHYihPJnFrC690A2","./package/managed/Uno.UI.pdb":"sha384-Rdct7qJB1qoZLf7ObYSTKYwh9vaiNmN1TrAO3JSt6fldhYXPkHD3Qu7nY3Vb0A96","./package/managed/Uno.UI.RemoteControl.clr":"sha384-uHV5PKKRucBy6q1T/pS2niOMboigZUTqVjp3fSDF2p0GCE1WII47PqReqUNXmeVJ","./package/managed/Uno.UI.RemoteControl.dll.config":"sha384-+VbkOIQHyLzqGDrh4zVuEkW4SyrKvj/FY03usbM96QOefcIaCDiEAWUcTNjLNrxP","./package/managed/Uno.UI.RemoteControl.Messaging.clr":"sha384-QIew54oD5ardjrz8U2zqjl+lqtmVOQPCNFC4+PkZ8Gf9Z1o9UqEekO5FC6nq3Izw","./package/managed/Uno.UI.RemoteControl.Messaging.pdb":"sha384-DdAHoQ0vIjBjYIBnNQY4qpzBWbSV7HC7Q4g2o9fpgVg+s1Q2MV0cfEUHpVYVJNwi","./package/managed/Uno.UI.RemoteControl.pdb":"sha384-d8d7oO2f83+CySLdlqMliXwDxxUiOVybdG63Nj0eRaLnx29/Ccnjk9nrKFF6XcX/","./package/managed/Uno.UI.Runtime.WebAssembly.clr":"sha384-0Hmqk80Tp9rTgfxKG2bTc7evKRCWKm4oyzNE8E/UtgsovkXZXIz0/uhdELmqZhjH","./package/managed/Uno.UI.Runtime.WebAssembly.pdb":"sha384-UR+NRfX2JiBxG6kncrLqbVWT7pcPTZUCk5UN3ljDskYL6hn+b/dhJa7Vj5a2lsui","./package/managed/Uno.UI.Toolkit.clr":"sha384-fmLWPcmROpepDoMrFIHnUxEQiUJ5fb5hYs9gZQ/oiIoD2gbNr4oR48rRnWb5N2cc","./package/managed/Uno.UI.Toolkit.pdb":"sha384-UuW03vFRc5lLYP7/qOOw60jZO+aCxt1WY/97LUqPSoLvS+U/7DeN/7cPksBu40jo","./package/managed/Uno.Xaml.clr":"sha384-MzLIX4jhB2F2tHUdOescbBy1gIopZo5NtjgvDyyt/CGjDsREe/3V+vdpgKDa2DHr","./package/managed/Uno.Xaml.pdb":"sha384-qKa3iPMc99y9qyW5R1mGf6seIIWI0DLUh2nbual7OPfM2z210J5aPfDTgG233dGV"};
config.total_assemblies_size = 34791275;
config.enable_pwa = true;
config.offline_files = ['/', "./package/AppManifest.js", "./package/CadenBase.exe", "./package/dotnet-legacy.d.ts", "./package/dotnet.d.ts", "./package/dotnet.js", "./package/dotnet.js.map", "./package/dotnet.native.js", "./package/dotnet.native.js.symbols", "./package/dotnet.native.wasm", "./package/dotnet.runtime.js", "./package/dotnet.runtime.js.map", "./package/emcc-props.json", "./package/Fonts.css", "./package/helpers.js", "./package/icon-128.png", "./package/icon-16.png", "./package/icon-32.png", "./package/icon-512.png", "./package/mono-config.json", "./package/normalize.css", "./package/pal_random.lib.js", "./package/require.js", "./package/runtime.js", "./package/setImmediate.js", "./package/splash_screen.png", "./package/splash_screen.scale-100.png", "./package/splash_screen.scale-125.png", "./package/splash_screen.scale-150.png", "./package/splash_screen.scale-200.png", "./package/splash_screen.scale-300.png", "./package/splash_screen.scale-400.png", "./package/uno-assets.txt", "./package/uno-bootstrap.css", "./package/uno-bootstrap.js", "./package/uno-config.js", "./package/Uno.UI.css", "./package/Uno.UI.js", "./package/uno.ui.media.js", "./package/WasmWebSockets.js", "./package/Assets/SharedAssets.md", "./package/Assets/custom/beian.png", "./package/Assets/custom/favicon.ico", "./package/Assets/custom/loading.gif", "./package/Assets/custom/package/icon-128.png", "./package/Assets/custom/package/icon-16.png", "./package/Assets/custom/package/icon-256.png", "./package/Assets/custom/package/icon-32.png", "./package/Assets/custom/package/icon-512.png", "./package/Assets/custom/package/splash_screen.png", "./package/Assets/custom/package/splash_screen.scale-100.png", "./package/Assets/custom/package/splash_screen.scale-125.png", "./package/Assets/custom/package/splash_screen.scale-150.png", "./package/Assets/custom/package/splash_screen.scale-200.png", "./package/Assets/custom/package/splash_screen.scale-300.png", "./package/Assets/custom/package/splash_screen.scale-400.png", "./package/Assets/Icons/icon_foreground.png", "./package/Assets/Icons/icon_foreground.scale-100.png", "./package/Assets/Icons/icon_foreground.scale-125.png", "./package/Assets/Icons/icon_foreground.scale-150.png", "./package/Assets/Icons/icon_foreground.scale-200.png", "./package/Assets/Icons/icon_foreground.scale-300.png", "./package/Assets/Icons/icon_foreground.scale-400.png", "./package/managed/CadenBase.clr", "./package/managed/CommunityToolkit.Mvvm.clr", "./package/managed/CommunityToolkit.Mvvm.pdb", "./package/managed/CommunityToolkit.WinUI.Controls.Primitives.clr", "./package/managed/CommunityToolkit.WinUI.Controls.Primitives.pdb", "./package/managed/CommunityToolkit.WinUI.Extensions.clr", "./package/managed/CommunityToolkit.WinUI.Extensions.pdb", "./package/managed/icudt.dat", "./package/managed/icudt_CJK.dat", "./package/managed/icudt_EFIGS.dat", "./package/managed/icudt_hybrid.dat", "./package/managed/icudt_no_CJK.dat", "./package/managed/Microsoft.CSharp.clr", "./package/managed/Microsoft.CSharp.pdb", "./package/managed/Microsoft.Extensions.DependencyInjection.Abstractions.clr", "./package/managed/Microsoft.Extensions.Hosting.Abstractions.clr", "./package/managed/Microsoft.Extensions.Localization.Abstractions.clr", "./package/managed/Microsoft.Extensions.Logging.Abstractions.clr", "./package/managed/Microsoft.IO.RecyclableMemoryStream.clr", "./package/managed/Newtonsoft.Json.clr", "./package/managed/System.clr", "./package/managed/System.Collections.clr", "./package/managed/System.Collections.Concurrent.clr", "./package/managed/System.Collections.Concurrent.pdb", "./package/managed/System.Collections.Immutable.clr", "./package/managed/System.Collections.Immutable.pdb", "./package/managed/System.Collections.NonGeneric.clr", "./package/managed/System.Collections.NonGeneric.pdb", "./package/managed/System.Collections.pdb", "./package/managed/System.Collections.Specialized.clr", "./package/managed/System.Collections.Specialized.pdb", "./package/managed/System.ComponentModel.clr", "./package/managed/System.ComponentModel.pdb", "./package/managed/System.ComponentModel.Primitives.clr", "./package/managed/System.ComponentModel.Primitives.pdb", "./package/managed/System.ComponentModel.TypeConverter.clr", "./package/managed/System.ComponentModel.TypeConverter.pdb", "./package/managed/System.Console.clr", "./package/managed/System.Console.pdb", "./package/managed/System.Data.Common.clr", "./package/managed/System.Data.Common.pdb", "./package/managed/System.Diagnostics.DiagnosticSource.clr", "./package/managed/System.Diagnostics.DiagnosticSource.pdb", "./package/managed/System.Diagnostics.TraceSource.clr", "./package/managed/System.Diagnostics.TraceSource.pdb", "./package/managed/System.Drawing.clr", "./package/managed/System.Drawing.pdb", "./package/managed/System.Drawing.Primitives.clr", "./package/managed/System.Drawing.Primitives.pdb", "./package/managed/System.Linq.clr", "./package/managed/System.Linq.Expressions.clr", "./package/managed/System.Linq.Expressions.pdb", "./package/managed/System.Linq.pdb", "./package/managed/System.Linq.Queryable.clr", "./package/managed/System.Linq.Queryable.pdb", "./package/managed/System.Memory.clr", "./package/managed/System.Memory.pdb", "./package/managed/System.Net.Http.clr", "./package/managed/System.Net.Http.pdb", "./package/managed/System.Net.Primitives.clr", "./package/managed/System.Net.Primitives.pdb", "./package/managed/System.Net.Security.clr", "./package/managed/System.Net.Security.pdb", "./package/managed/System.Net.WebSockets.Client.clr", "./package/managed/System.Net.WebSockets.Client.pdb", "./package/managed/System.Net.WebSockets.clr", "./package/managed/System.Net.WebSockets.pdb", "./package/managed/System.ObjectModel.clr", "./package/managed/System.ObjectModel.pdb", "./package/managed/System.pdb", "./package/managed/System.Private.CoreLib.clr", "./package/managed/System.Private.CoreLib.pdb", "./package/managed/System.Private.Uri.clr", "./package/managed/System.Private.Uri.pdb", "./package/managed/System.Private.Xml.clr", "./package/managed/System.Private.Xml.Linq.clr", "./package/managed/System.Private.Xml.Linq.pdb", "./package/managed/System.Private.Xml.pdb", "./package/managed/System.Runtime.InteropServices.JavaScript.clr", "./package/managed/System.Runtime.InteropServices.JavaScript.pdb", "./package/managed/System.Runtime.Numerics.clr", "./package/managed/System.Runtime.Numerics.pdb", "./package/managed/System.Runtime.Serialization.Formatters.clr", "./package/managed/System.Runtime.Serialization.Formatters.pdb", "./package/managed/System.Runtime.Serialization.Primitives.clr", "./package/managed/System.Runtime.Serialization.Primitives.pdb", "./package/managed/System.Security.Cryptography.clr", "./package/managed/System.Security.Cryptography.pdb", "./package/managed/System.Text.Encodings.Web.clr", "./package/managed/System.Text.Encodings.Web.pdb", "./package/managed/System.Text.Json.clr", "./package/managed/System.Text.Json.pdb", "./package/managed/System.Text.RegularExpressions.clr", "./package/managed/System.Text.RegularExpressions.pdb", "./package/managed/System.Web.HttpUtility.clr", "./package/managed/System.Web.HttpUtility.pdb", "./package/managed/System.Xml.Linq.clr", "./package/managed/System.Xml.Linq.pdb", "./package/managed/Uno.clr", "./package/managed/Uno.Core.Extensions.Collections.clr", "./package/managed/Uno.Core.Extensions.Collections.pdb", "./package/managed/Uno.Diagnostics.Eventing.clr", "./package/managed/Uno.Diagnostics.Eventing.pdb", "./package/managed/Uno.Extensions.Core.clr", "./package/managed/Uno.Extensions.Core.pdb", "./package/managed/Uno.Extensions.Core.UI.clr", "./package/managed/Uno.Extensions.Core.UI.pdb", "./package/managed/Uno.Extensions.Hosting.clr", "./package/managed/Uno.Extensions.Hosting.pdb", "./package/managed/Uno.Extensions.Hosting.WinUI.clr", "./package/managed/Uno.Extensions.Hosting.WinUI.pdb", "./package/managed/Uno.Extensions.Navigation.clr", "./package/managed/Uno.Extensions.Navigation.pdb", "./package/managed/Uno.Extensions.Navigation.UI.clr", "./package/managed/Uno.Extensions.Navigation.UI.pdb", "./package/managed/Uno.Extensions.Storage.UI.clr", "./package/managed/Uno.Extensions.Storage.UI.pdb", "./package/managed/Uno.Foundation.clr", "./package/managed/Uno.Foundation.Logging.clr", "./package/managed/Uno.Foundation.Logging.pdb", "./package/managed/Uno.Foundation.pdb", "./package/managed/Uno.Foundation.Runtime.WebAssembly.clr", "./package/managed/Uno.Foundation.Runtime.WebAssembly.pdb", "./package/managed/Uno.pdb", "./package/managed/Uno.UI.clr", "./package/managed/Uno.UI.Composition.clr", "./package/managed/Uno.UI.Composition.pdb", "./package/managed/Uno.UI.Dispatching.clr", "./package/managed/Uno.UI.Dispatching.pdb", "./package/managed/Uno.UI.FluentTheme.v2.clr", "./package/managed/Uno.UI.FluentTheme.v2.pdb", "./package/managed/Uno.UI.MediaPlayer.WebAssembly.clr", "./package/managed/Uno.UI.MediaPlayer.WebAssembly.pdb", "./package/managed/Uno.UI.pdb", "./package/managed/Uno.UI.RemoteControl.clr", "./package/managed/Uno.UI.RemoteControl.dll.config", "./package/managed/Uno.UI.RemoteControl.Messaging.clr", "./package/managed/Uno.UI.RemoteControl.Messaging.pdb", "./package/managed/Uno.UI.RemoteControl.pdb", "./package/managed/Uno.UI.Runtime.WebAssembly.clr", "./package/managed/Uno.UI.Runtime.WebAssembly.pdb", "./package/managed/Uno.UI.Toolkit.clr", "./package/managed/Uno.UI.Toolkit.pdb", "./package/managed/Uno.Xaml.clr", "./package/managed/Uno.Xaml.pdb", "./package/Uno.Fonts.Fluent/Fonts/uno-fluentui-assets.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-Bold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-BoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-ExtraBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-ExtraBoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-Italic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-Light.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-LightItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-Medium.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-MediumItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-Regular.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-SemiBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans-SemiBoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans.ttf.manifest", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-Bold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-BoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-ExtraBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-ExtraBoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-Italic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-Light.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-LightItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-Medium.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-MediumItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-Regular.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-SemiBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_Condensed-SemiBoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-Bold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-BoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-ExtraBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-ExtraBoldItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-Italic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-Light.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-LightItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-Medium.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-MediumItalic.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-Regular.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-SemiBold.ttf", "./package/Uno.Fonts.OpenSans/Fonts/OpenSans_SemiCondensed-SemiBoldItalic.ttf"];
config.uno_shell_mode = "Browser";
config.emcc_exported_runtime_methods = [];
config.environmentVariables = config.environmentVariables || {};
config.environmentVariables["UNO_BOOTSTRAP_MONO_RUNTIME_MODE"] = "Interpreter";
config.environmentVariables["UNO_BOOTSTRAP_MONO_PROFILED_AOT"] = "False";
config.environmentVariables["UNO_BOOTSTRAP_LINKER_ENABLED"] = "True";
config.environmentVariables["UNO_BOOTSTRAP_DEBUGGER_ENABLED"] = "False";
config.environmentVariables["UNO_BOOTSTRAP_MONO_RUNTIME_CONFIGURATION"] = "Release";
config.environmentVariables["UNO_BOOTSTRAP_MONO_RUNTIME_FEATURES"] = "";
config.environmentVariables["UNO_BOOTSTRAP_APP_BASE"] = "package";
config.environmentVariables["UNO_BOOTSTRAP_WEBAPP_BASE_PATH"] = "/";
export { config };
