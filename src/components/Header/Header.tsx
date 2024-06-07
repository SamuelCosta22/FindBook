import background from '../../assets/img/background-header.png'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'

export function Header(){
    return(
        <header style={{backgroundImage: `url(${background})`}} className='h-auto'>
            <Container>
                <HeaderTitle />
                <div className='mt-28 bg-cover bg-center bg-no-repeat'>
                    <p className='md:text-7xl text-xl font-bold text-evergreen'>Encontre livros <br/> que sejam a sua cara!</p>
                    <p className='text-gray-500 my-5 text-xl'>Lorem ipsum</p>
                    <Button title='Pesquisar livros' />
                </div>
            </Container>
        </header>
    )
}