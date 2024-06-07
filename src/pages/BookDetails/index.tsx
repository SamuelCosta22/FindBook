import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export function BookDetails(){
    const { id } = useParams()

    return(
        <Container>
            <HeaderTitle />
            <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
                <div>
                    <h2 className="text-5xl font-bold text-evergreen">Nome do livro</h2>
                    <p className="text-xl text-gray-500 font-light py-4">Autor</p>
                    <p className="text-gray-500 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente temporibus ad dicta, nisi tempora tenetur expedita fugiat similique quasi ex consectetur ab ratione facere voluptates earum perferendis, dolor porro velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero veniam, blanditiis rerum beatae voluptatum tempora iusto quos! Et rem corporis quidem eaque repudiandae eveniet magni molestiae iste facilis, ratione alias.</p>
                </div>
                <div>
                <img src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg" alt="" className="w-full rounded-lg" />
                </div>
            </div>
            <div>
                <Title className="my-6" title="Recomendações com base neste livro" />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Card id="123" />
                    <Card id="123" />
                    <Card id="123" />
                    <Card id="123" />
                </div>
            </div>
        </Container>
    )
}