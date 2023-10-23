import Container from "components/container";
import InputField from "components/form-fiels/input-fields";
import { useForm, SubmitHandler } from "react-hook-form"

type TForminitialstate = {
    name: string;
    email: string;
}

function Example() {
    const { register, handleSubmit, formState: { errors } } = useForm<TForminitialstate>()
    const formSubmit: SubmitHandler<TForminitialstate> = (data) => {
        console.log(data)
    }
    console.log(errors, 'err')
    return (
        <>
            <Container>
                <div>This Is Example Page Using React Hook Form</div>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <InputField register={register} name="name" type="text" errors={errors} validation={{ required: true }} />
                    <InputField register={register} name="email" type="email" errors={errors} />
                    <button type="submit">submit</button>
                </form>
            </Container>
        </>
    )
}

export default Example