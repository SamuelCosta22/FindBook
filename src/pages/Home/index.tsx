import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

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
    <>
        <Header />
        <Container>
          <Title title="O que você quer ler hoje?" />
          <div className="gap-8 grid grid-cols-8 my-6">
            {genderBooks.map(book => (
                <Button title={book} variant={selectedGender.includes(book) ? 'dark' : 'light' } onClick={() => handleSelected(book)} />
            ))}
          </div>
          <div className="pt-7">
            <p className="text-evergreen font-semibold text-2xl">Sobre o que você gostaria de receber uma recomendação de livro?</p>
            <input type="text" placeholder="Eu gostaria de ler..." className="outline-none shadow-lg border border-gray-100 rouded-lg w-full p-3" />
          </div>
        </Container>
      </>
    )
}