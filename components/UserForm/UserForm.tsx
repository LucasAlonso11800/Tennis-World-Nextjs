import React, { Dispatch, SetStateAction } from 'react';
import {
    Container,
    Title,
    Subtitle,
    ErrorContainer,
    ErrorMessage,
    Form,
    Label,
    Input,
    SubmitButton
} from './UserForm.elements';
import { RiErrorWarningFill } from 'react-icons/ri';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

type Props = {
    title: string
    subtitle: string
    buttonText: string
    loading: boolean
    authError: string
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    password: string
    setPassword: Dispatch<SetStateAction<string>>
    handleSubmit: (e: any) => void
};

export default function UserForm(props: Props) {
    const { title, subtitle, buttonText, loading, authError, email, setEmail, password, setPassword, handleSubmit } = props;

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {authError &&
                <ErrorContainer>
                    <RiErrorWarningFill size={24} />
                    <ErrorMessage>{authError}</ErrorMessage>
                    <RiErrorWarningFill size={24} />
                </ErrorContainer>
            }
            {loading ? <LoadingIcon /> :
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Label>Email</Label>
                    <Input
                        type='email'
                        placeholder='Insert your Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Label>Password</Label>
                    <Input
                        type='password'
                        placeholder='Insert your Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <SubmitButton type='submit'>
                        {buttonText}
                    </SubmitButton>
                </Form>
            }
        </Container>
    )
};
