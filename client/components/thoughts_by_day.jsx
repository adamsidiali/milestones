let thoughts_by_day = React.createClass({
    getDefaultProps() {

    },

    currentDay() {
        return this.props.data;
    },

    render() {
        return (
            <div className="day-wrapper">
                <span className="day-title">{this.currentDay()}</span>
            </div>
        )
    }
});

console.log("requesting to add component thoughts_by_day...")

Milestones.setComponent("thoughts_by_day", thoughts_by_day, function (err,res) {
    if (err) return console.log(err);
    return console.log("thoughts_by_day successfully added");
})
