import Nav  from './Nav'

export default function Header(){
    return (
        <div className='flex gap-x-4 justify-center p-4'>

            <Nav titulo="inicio" url="/"></Nav>
            <Nav titulo="Walace" url="/walace"></Nav>
            <Nav titulo="sobre" url="/sobre"></Nav>

        </div>
    )
}