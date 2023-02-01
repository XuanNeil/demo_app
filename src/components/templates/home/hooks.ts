import {useEffect, useState} from "react";
import {coveredRepository} from "@/repositories";
import {IListCovered} from "@/components/templates/home/types";

export const useFetch = () => {
    const [data, setData] = useState<IListCovered>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(()=> {
        async function fetching(){
            try {
                setIsLoading(true);
                const res = await coveredRepository.list();
                setData(res.data);
            }catch (err: any){
                setError(err)
            }finally {
                setIsLoading(false);
            }
        }

        fetching();
        }, []);

    return {data, error, isLoading}
}