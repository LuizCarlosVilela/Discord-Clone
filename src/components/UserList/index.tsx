import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
    isFriend?: boolean;
    isClass?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot,
    isFriend,
    isClass
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : isFriend ? 'friend' : isClass ? 'class' : ''} />
            <strong>{nickname}</strong>

            {isClass && <span>MyClass</span>}
            {isFriend && <span>Friend</span>}
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {

    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Luiz Carlos" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Amós Aureliano" isFriend />
            <UserRow nickname="Sallys Carlos" isFriend />
            <UserRow nickname="Daniel Carvalho" isFriend />
            <UserRow nickname="Reginaldo" isFriend />
            <UserRow nickname="Jaciel" isFriend />
            <UserRow nickname="Belo Presidente" isFriend />
            <UserRow nickname="São muitos ..." isFriend />
            <UserRow nickname="923-A" isClass />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />
            <UserRow nickname="Deus é mais hehe" />


        </Container>
    )
};

export default UserList;