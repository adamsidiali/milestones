/*
====================================
====================================
 Routes
====================================
====================================
*/

FlowRouter.route("/", {
    name: "home",
    action: () => {
        FlowRouter.go("logView")
    }
})

FlowRouter.route("/organize", {
    name: "organizeView",
    action: () => {
        BlazeLayout.render("MainLayout", {content: "dailyCard"})
    }
})

FlowRouter.route("/log", {
    name: "logView",
    action: () => {
        BlazeLayout.render("MainLayout", {content: "dailyCard"})
    }
})

FlowRouter.route("/analyze", {
    name: "analyzeView",
    action: () => {
        BlazeLayout.render("MainLayout", {content: "dailyCard"})
    }
})
