type Props ={
    name: string
    age: number
}

export const Header = ({name, age}: Props) => {

    return (
        <header>
        <h1> Ola {name}, tudo bem? Parabéns pelos seus {age} anos! </h1>
        </header>
    )
}

