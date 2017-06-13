const expect = require("expect");
const React = require("react");
const ReactDOM = require("react-dom");
const TestUtils = require("react-addons-test-utils");
const $ = require("jQuery");

const Controls = require("Controls");

describe("Controls", () => {
    it("should exist", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("should render pause when started", () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $pauseButton = $el.find("button:contains(Pause)");

            expect($pauseButton.length).toBe(1);
        });

        it("should render start when paused", () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="pause" />);
            const $el = $(ReactDOM.findDOMNode(controls));
            const $pauseButton = $el.find("button:contains(Start)");

            expect($pauseButton.length).toBe(1);
        });
    });
});