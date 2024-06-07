import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

type Props = {
    id: string;
}

export function Card({id}: Props){
    const navigate = useNavigate()
    const handleSelectedBook = useCallback(() => {
        navigate(`/${id}`)
    },[id, navigate])

    return(
        <div className="p-4 grid grid-cols-3 gap-3 shadow-lg rounded-lg border border-gray-100 max-w-lg">
            <img src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg" alt="" className="col-span-1 w-full rounded-lg" />
            <div className="col-span-2">
                <p className="font-bold text-xl text-evergreen">Código Limpo</p>
                <p className="font-light text-lg text-gray-500 mb-2">Autor</p>
                <Tag className="mb-3" title="Computer Engineer" />
                <p><strong>Sinopse:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis sequi numquam repellat nobis, quaerat nisi provident eligendi? Praesentium quia reiciendis magni, reprehenderit architecto repellendus vitae ex inventore dolor. Aspernatur!</p>
                <Button onClick={handleSelectedBook} className="w-1/2" title="Ver mais" variant="light" />
            </div>
        </div>
    )
}