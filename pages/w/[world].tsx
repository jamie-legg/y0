import Button from "../../components/button/Button";
import { useRouter } from 'next/router'
import Page from "../../components/layout/Page";
import Header from "../../components/layout/Header";
import { useState } from "react";

interface IW {
    name: string | null
}



export default function World(props) {
    const [w, sW] = useState<IW>({name: "The Sauna"});
    
    const router = useRouter()
    const { worldSlug } = router.query;
    const queryKey = 'w';
    
    switch(worldSlug) {
        case "fiyestas":
            sW({name: "Fiyestas"})
    }
    
    return (
        <Page>
                    {/* Page title & actions */}
        <div className="border-b px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <Header title={w.name} />
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
            <Button text="Save" colour={2} click={() => console.log('test')} />
        </div>
        </div>
        </Page>
    )
}