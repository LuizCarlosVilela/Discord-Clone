import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="Turma 923-A" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="uma aí" />
            <ChannelButton channelName="valorant" />

        </Container>
    )
};

export default ChannelList;