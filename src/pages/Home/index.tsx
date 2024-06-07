import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";

const genderBooks = [
    'Ação',
    'Aventura',
    'Biografia',
    'Comédia',
    'Drama',
    'Ficção',
]

export function Home(){
    const[selectedGender, setSelectedGender] = useState<string[]>([]);

    const handleSelected = useCallback((title: string) => {
        if(selectedGender.includes(title)){
            const removeGender = selectedGender.filter(item => item != title);
            setSelectedGender(removeGender);
        } else {
            setSelectedGender([...selectedGender, title])
        }
    }, [selectedGender])

    return(
    <div className="mb-8">
        <Header />
        <Container>
          <Title title="O que você quer ler hoje?" />
          <div className="gap-8 grid md:grid-cols-8 grid-cols-4 my-6">
            {genderBooks.map((book, index) => (
                <Button key={index} title={book} variant={selectedGender.includes(book) ? 'dark' : 'light' } onClick={() => handleSelected(book)} />
            ))}
          </div>
          <div className="py-7">
            <p className="text-evergreen font-semibold text-2xl">Sobre o que você gostaria de receber uma recomendação de livro?</p>
            <Input placeholder="Eu gostaria de ler..." />
          </div>
          <Title className="my-5" title="Livros recomendados" />
          <Card id="123" />
        </Container>
      </div>
    )
}