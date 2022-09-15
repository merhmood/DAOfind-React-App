import { reducerFunction } from "../../controllers/reducerFunction";
import Data from "../../data.json"

describe("testing reducer function", ()=>{
    describe("testing search action", ()=>{
        let state;
        beforeEach(() => {
            state = getState()
        })
        test("testing search action with empty value", () => {
            let actual = reducerFunction(state, { type: "SEARCH", name: "" })
            expect(actual).toEqual(setState(state, {searchValue: ""}))

        })
        test("testing search action with search value to be aave", () => {
            let actual = reducerFunction(state, { type: "SEARCH", name: "aave" })
            expect(actual).toEqual(setState(state, { searchValue: "aave" }))

        })
    })
    describe("testing search action", () => {
        let state;
        beforeEach(() => {
            state = getState()
        })
        test("testing search action with empty value", () => {
            let actual = reducerFunction(state, { type: "SEARCH", name: "" })
            expect(actual).toEqual(setState(state, { searchValue: "" }))

        })
        test("testing search action with search value to be aave", () => {
            let actual = reducerFunction(state, { type: "SEARCH", name: "aave" })
            expect(actual).toEqual(setState(state, { searchValue: "aave" }))

        })
    })
})

function getState (){
    return {
        showDao: {
            bool: false,
            click: 0,
            showId: "",
        },
        daoList: Data,
        navClick: "home",
        filter: {
            data: [],
            name: "All",
        },
        searchValue: "",
    };
}

function setState (state, changes){
    return {...state, ...changes}
}