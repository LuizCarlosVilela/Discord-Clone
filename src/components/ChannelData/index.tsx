import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>

                <ChannelMessage
                    author="Luiz Carlos"
                    date="20/06/2020"
                    content="Deus é mais"
                />
                <ChannelMessage
                    author="Luiz Carlos"
                    date="20/06/2020"
                    content="Deus é mais"
                />
                <ChannelMessage
                    author="Luiz Carlos"
                    date="20/06/2020"
                    content="Deus é mais"
                />
                <ChannelMessage
                    author="Luiz Carlos"
                    date="20/06/2020"
                    content="Deus é mais"
                />
                <ChannelMessage
                    author="Emanoel"
                    date="20/06/2020"
                    content="Gado Rei aqui hehe"
                    isFriend
                />
                <ChannelMessage
                    author="Victor"
                    date="20/06/2020"
                    content="Que baixaria ksks"
                    isFriend
                />
                <ChannelMessage
                    author="Dani"
                    date="20/06/2020"
                    content="ksks"
                    isFriend
                />
                <ChannelMessage
                    author="Jaciel"
                    date="20/06/2020"
                    content="Oxe '-'"
                    isFriend
                />
                <ChannelMessage
                    author="Daniel"
                    date="20/06/2020"
                    content="Vão dormir"
                    isFriend
                />
                <ChannelMessage
                    author="Sallys Carlos"
                    date="20/06/2020"
                    content="Que balbúrdia é essa?"
                    isFriend
                />
                <ChannelMessage
                    author="Amós Aureliano"
                    date="20/06/2020"
                    content="Digo isso, não digo nada."
                    isFriend
                />
                <ChannelMessage
                    author="Diego Fernandes"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Luiz Carlos</Mention>, olá mundo!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>


            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;