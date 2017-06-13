const React = require("react");

const Clock = require("Clock");
const Controls = require("Controls");

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: "stopped"
        };
    },
    componentDidUpdate: function (prevProps, prevState){
        if(this.state.timerStatus !== prevState.timerStatus){
            switch(this.state.timerStatus){
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0});
                case "paused":
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    handleStatusChange: function (newStatus){
        this.setState({timerStatus: newStatus});
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    render: function (){
        const {count, timerStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;