

Template.MainLayout.onCreated(function () {

    var self = this;

    self.menuIsActive = new ReactiveVar(false);

    self.routes = [
        {name:"organize", path: "/organize", active: false},
        {name:"log", path: "/log", active: false},
        {name:"analyze", path: "/analyze", active: false}

    ]



});


Template.MainLayout.helpers({
    menuIsActive() {
        return Template.instance().menuIsActive.get();
    },
    routes() {
        let currentPath = FlowRouter.current().path;
        let routes = Template.instance().routes
        _.each(routes, (route) => {
            if (route.path == currentPath) route.active = true;
            if (route.path != currentPath) route.active = false;
        })
        return Template.instance().routes;
    },

})

Template.MainLayout.events({
    "click .toggle-navigation": function (e,t) {
        t.menuIsActive.set(!t.menuIsActive.get())
    },
    "click .navigation-menu-backdrop.menu-active": function (e,t) {
        t.menuIsActive.set(false);
    }
})

Template.thoughtInput.onCreated(function () {
    const template = this;
    template.addingThought = new ReactiveVar(false);
})

Template.thoughtInput.helpers({
    addingThought() {
        return Template.instance().addingThought.get();
    }
})

Template.thoughtInput.events({
    "focus .add-thought-input": function (e,t) {
        t.addingThought.set(true)
    },
    "blur .add-thought-input": function (e,t) {
        t.addingThought.set(false)
    }
})


Template.dailyCard.onCreated(function () {
    const self = this;
    self.showTopShadow = new ReactiveVar(false);
    self.showBottomShadow = new ReactiveVar(true);
})

Template.dailyCard.onRendered(function () {
    const self = this;

    let list = $(".card>ul");
    // run shadow check
    list.scroll(function () {
        if (list.scrollTop() > 3) self.showTopShadow.set(true);
        if (list.scrollTop() <= 3 ) self.showTopShadow.set(false);

        if (list.scrollTop() + list.innerHeight() >= list[0].scrollHeight) self.showBottomShadow.set(false)
        if (list.scrollTop() + list.innerHeight() < list[0].scrollHeight) self.showBottomShadow.set(true)
    });
})


Template.dailyCard.helpers({
    showTopShadow() {
        return Template.instance().showTopShadow.get();
    },
    showBottomShadow() {
        return Template.instance().showBottomShadow.get();
    },
    component() {
        return Milestones.getComponent("thoughts_by_day");
    },
    data() {
        return Milestones.getData();
    }
});
