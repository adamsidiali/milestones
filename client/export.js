class ReactiveView extends Mongo.Collection {

    get(callback) {
        let RV = this.findOne();
        if (callback) return callback(RV);
        return RV;
    }

    getData(callback) {
        let RV = this.findOne();
        if (callback) return callback(RV.data);
        return RV.data;
    }

    setData(key, value, callback) {
        let RV = this.findOne();
        RV.data[key] = value;
        this.update({}, {$set: {data: RV.data}}, function (err,res) {
            if (err) return err;
            if (callback) return callback(res);
            return res;
        });
    }

    getComponent(component, callback) {
        let RV = this.findOne();
        if (callback) return callback(RV.components[component]);
        return RV.components[component];
    }

    setComponent(componentName, component, callback) {
        let RV = this.findOne();
        RV.components[componentName] = component;
        this.update({}, {$set: { components: RV.components }}, function (err,res) {
            if (callback) return callback(err,res);
            return res;
        });
    }

    getState(state, callback) {
        let RV = this.findOne();
        if (callback) return callback(RV.state[state]);
        return RV.state[state];
    }

}

Milestones = new ReactiveView(null);

Milestones.insert({
    components: {
        "thoughts_by_day": null,
        "thoughts_by_goal": null
    },
    data: {
        ready: false
    },
    state: {}
})
