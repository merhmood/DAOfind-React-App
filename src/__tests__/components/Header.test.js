import React from "react"
import renderer from "react-test-renderer"
import Header from "../../components/Header"
import { AppContext } from "../../components/AppContext";
import Data from "../../data.json"


describe('Testing index page', () => {
    test("testing Header component with empty search value",() => {
        const appStateManager = setFakeData(Data, "")
        const component = renderer.create(
        <AppContext.Provider value={{ appStateManager}}>
            <Header />
        </AppContext.Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test("testing Header component with aave search value", () => {
        const appStateManager = setFakeData(Data, "aave")
        const component = renderer.create(
            <AppContext.Provider value={{ appStateManager }}>
                <Header />
            </AppContext.Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test("testing Header component with 43 search value", () => {
        const appStateManager = setFakeData(Data, 43)
        const component = renderer.create(
            <AppContext.Provider value={{ appStateManager }}>
                <Header />
            </AppContext.Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})


function setFakeData (importedData, searchValue){

    return {
        showDao: {
            bool: false,
            click: 0,
            showId: "",
        },
        daoList: importedData,
        navClick: "home",
        filter: {
            data: [],
            name: "All",
        },
        searchValue,
    }
}