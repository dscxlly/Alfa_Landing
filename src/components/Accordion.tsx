import React, {useState} from "react";

const Accordion =  (props: any) => {
    const [data, setData] = useState(props.datas);
    
    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({...data, active : activeNew});
    }

    return (
        <div className={`w-full p-5 bg-white border-red-700 border-s-4 rounded-sm mb-3 duration-500 cursor-pointer group ${data.active === 1 ? 'is-active bg-white' : ''}`}
        onClick={handleToggleActive}
        >
            <div className="flex items-center">
                <div className="w-full font-bold">
                {data.question} 
                </div>
                <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg] font-mono">
                    {'>'}
                </div>
            </div>
            <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
                {data.answer} 
            </div>
        </div>
    );
}
export default Accordion;