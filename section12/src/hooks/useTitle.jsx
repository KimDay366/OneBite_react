import { useEffect } from "react";

const useTitle = (customTitle) => {
    useEffect(()=>{
            const $title = document.getElementsByTagName("title")[0];
            $title.innerText = customTitle;
        },[customTitle]);
}

export default useTitle;