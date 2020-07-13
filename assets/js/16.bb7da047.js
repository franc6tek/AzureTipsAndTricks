(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{325:function(e,t,o){"use strict";o.r(t);var r=o(43),i=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility","aria-hidden":"true"}},[e._v("#")]),e._v(" A multi-part series showing an end-to-end possibility")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crystal Tenn"),o("OutboundLink")],1),e._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The  technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),e._v(" "),o("p",[e._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - SQL Server"),o("OutboundLink")],1),e._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Local Setup - Visual Studio and Swagger"),o("OutboundLink")],1),e._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger - Learn how to use Swagger for API management"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding the project to VSTS with Git"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/todolist-diagram.png")}}),e._v(" "),o("p",[e._v("We will use Visual Studio to deploy to Azure in this tutorial. This can also be done by packaging up the files and uploading manually to Azure. Or, you could do it via an automated CI/CD (Build and Release) process which will be shown in upcoming posts.")]),e._v(" "),o("h4",{attrs:{id:"front-end-angular-back-end-api-projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#front-end-angular-back-end-api-projects","aria-hidden":"true"}},[e._v("#")]),e._v(" Front-end Angular + Back-end API projects")]),e._v(" "),o("p",[e._v("Before we begin, I'm assuming you're using the same email address for VSTS that you are using for Azure.")]),e._v(" "),o("p",[e._v("1.) Open the solution file in Visual Studio, if it is not already opened. Login to Visual Studio with the same email address that you used to signup for your Azure account.")]),e._v(" "),o("p",[e._v("2.)  Right click on the API project and choose Publish.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-08.png")}}),e._v(" "),o("p",[e._v("3.) Choose an App Service.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-09.png")}}),e._v(" "),o("p",[e._v("4.) Fill in all the settings: add in a name, choose the subscription, create a new resource group. For the App Service Plan: choose a name, the closest location to you and Free. Then on the main modal click "),o("strong",[e._v("Create")]),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-10-1.png")}}),e._v(" "),o("p",[e._v("If you are on the "),o("strong",[e._v("ToDoListAPI")]),e._v(" project, make sure you have API selected.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-18.png")}}),e._v(" "),o("p",[e._v("If you are on the "),o("strong",[e._v("ToDoListAngular")]),e._v(" project, make sure you have Web App selected.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-19.png")}}),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-11.png")}}),e._v(" "),o("p",[e._v("5.) Make sure it shows up in the Azure Portal after giving it a few minutes to publish. Click on the API project to go to the overview (red arrow).")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-12.png")}}),e._v(" "),o("p",[e._v("6.) Copy the URL of the API App Service as highlighted in the screen-shot.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-13.png")}}),e._v(" "),o("p",[e._v("7.) Let's connect the front end to the API project.  Open up the "),o("strong",[e._v("ToDoListAngular")]),e._v(" solution.  Go to the "),o("strong",[e._v("web.config")]),e._v(" file of your front end "),o("strong",[e._v("ToDoListAngular")]),e._v(" project. Paste in the URL from the previous step.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-14.png")}}),e._v(" "),o("p",[e._v("8.) Let's do the same publishing to Azure for the front end project.")]),e._v(" "),o("p",[o("strong",[e._v('Repeat steps 2-5, BUT do it on the front end ToDoListAngular project. Make sure on Step 4 you choose the right option of "Web App" for the Angular Web project.')])]),e._v(" "),o("p",[e._v("9.) Verify once you are done Publishing that it is in the Azure Portal.  Click on the App Service (red arrow in screenshot).")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-15.png")}}),e._v(" "),o("p",[e._v("10.) On the "),o("strong",[e._v("Overview")]),e._v(" page, get the URL and copy it.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-16.png")}}),e._v(" "),o("p",[e._v("11.) Paste the URL into your browser and click on the "),o("strong",[e._v("Todo")]),e._v(" tab to see the Todo list. You should now have a working Azure App Service Web  front end talking to an Azure App Service API which connects to Azure SQL.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/e2e-17.png")}})])},[],!1,null,null,null);t.default=i.exports}}]);