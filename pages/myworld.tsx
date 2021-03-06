import Button from "../components/button/Button";
import Header from "../components/layout/Header";
import Page from "../components/layout/Page";

export default function MyWorld(props) {
    return (
        <Page>
        <div className="border-b px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <Header title={"My World"} />

            <div className="mt-4 flex sm:mt-0 sm:ml-4">
            <Button text="Save" colour={2} click={() => console.log('test')} />
        </div>
        </div>
        </Page>
    )
}