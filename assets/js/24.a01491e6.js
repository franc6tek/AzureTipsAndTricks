(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{330:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("💡 Learn more : "),e("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"prevent-secrets-from-getting-out-with-net-core"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prevent-secrets-from-getting-out-with-net-core","aria-hidden":"true"}},[t._v("#")]),t._v(" Prevent secrets from getting out with .NET Core")]),t._v(" "),e("p",[t._v("I was recently building out a .NET Core Console App and it had secrets such as my "),e("strong",[t._v("Bit.ly API key")]),t._v(" and "),e("strong",[t._v("Azure Storage Table DB Connection string")]),t._v(" (which also has my password). I got busy and forgot what I was doing and "),e("strong",[t._v("committed it to GitHub")]),t._v(". That really sucks, but")]),t._v(" "),e("h4",{attrs:{id:"i-had-options-but-didn-t-take-them"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-had-options-but-didn-t-take-them","aria-hidden":"true"}},[t._v("#")]),t._v(" I had options, but didn't take them")]),t._v(" "),e("p",[t._v("So why didn't I use "),e("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Key Vault"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/security/app-secrets?tabs=visual-studio?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secret Manager"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("For Azure Key Vault, I felt there was some overhead (such as learning it) that I didn't want to pay. It also is a very cheap service, but I wanted FREE. Regarding Secret Manager, that information is always stored in the user profile directory such as "),e("code",[t._v("%APPDATA%\\microsoft\\UserSecrets\\<userSecretsId>\\secrets.json")]),t._v(" for Windows or "),e("code",[t._v("~/.microsoft/usersecrets/<userSecretsId>/secrets.json")]),t._v(" for Mac/Linux. This means if other folks want to get your key store, they can target those directories b/c the JSON file is unencrypted. Not that my version is encrypted, it just isn't stored in the user profile directory.")]),t._v(" "),e("h4",{attrs:{id:"how-i-prevent-secrets-from-getting-pushed-to-github-with-net-core"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-i-prevent-secrets-from-getting-pushed-to-github-with-net-core","aria-hidden":"true"}},[t._v("#")]),t._v(" How I Prevent secrets from getting pushed to GitHub with .NET Core")]),t._v(" "),e("p",[t._v("Part 1:")]),t._v(" "),e("ul",[e("li",[t._v("I create a new .NET Core App in Visual Studio. (For example: A console app)")]),t._v(" "),e("li",[t._v("I add a file called "),e("code",[t._v("appSecrets.json")]),t._v(" and define a couple of secrets that I don't want getting out. Such as my Bit.ly API key and Azure Table Storage Connection String.")])]),t._v(" "),e("div",{staticClass:"language-asciidoc line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-asciidoc"}},[e("code",[t._v('{\n  "ConnectionStrings": {\n    "BitlyAPI": "A_BITLY_API_KEY",\n    "StorageAccountAPI": "MY_STORAGE_ACCOUNT_KEY"\n  }\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Part 2:")]),t._v(" "),e("ul",[e("li",[t._v("Set the "),e("code",[t._v("appSecrets.json")]),t._v(" file to "),e("strong",[t._v("Copy if newer")]),t._v(" inside of Visual Studio.")])]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/azconsecret1.png")}}),t._v(" "),e("p",[t._v("Part 3:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("I add the following "),e("strong",[t._v("NuGet")]),t._v(" packages that allows us to easily read a local JSON file (such as our "),e("code",[t._v("appSecrets.json")]),t._v(") and extract key pieces of information:")])]),t._v(" "),e("li",[e("p",[t._v("Microsoft.Extensions.Configuration")])]),t._v(" "),e("li",[e("p",[t._v("Microsoft.Extensions.Configuration.FileExtensions")])]),t._v(" "),e("li",[e("p",[t._v("Microsoft.Extensions.Configuration.Json")])])]),t._v(" "),e("p",[t._v("Part 4:")]),t._v(" "),e("ul",[e("li",[t._v("I add the following code inside the "),e("strong",[t._v("Main")]),t._v(" method.")]),t._v(" "),e("li",[t._v("This uses ConfigurationBuilder and searches for the file.")])]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" builder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigurationBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetBasePath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Directory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetCurrentDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddJsonFile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appSecrets.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optional"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reloadOnChange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IConfigurationRoot")]),t._v(" configuration "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("You can now access the value of the string with the following :")]),t._v(" "),e("div",{staticClass:"language-csharp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("configuration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConnectionString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageAccountAPI"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Part 5: "),e("strong",[t._v("VERY IMPORTANT")])]),t._v(" "),e("ul",[e("li",[t._v("Set your "),e("code",[t._v("/.gitignore")]),t._v(" to ignore the "),e("code",[t._v("appSecrets.json")]),t._v(" that we added.")])]),t._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("####")]),t._v(" Ignore Visual Studio temporary files, build results, and")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("####")]),t._v(" files generated by popular Visual Studio add-ons.")]),t._v("\n\nappSecrets.json\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("img",{attrs:{src:t.$withBase("/files/azconsecret2.png")}}),t._v(" "),e("p",[t._v("You can verify this file is ignored by looking for the "),e("strong",[t._v("red circle")]),t._v(" if using Visual Studio.")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/files/azconsecret3.png")}})])},[],!1,null,null,null);s.default=n.exports}}]);