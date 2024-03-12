import React from 'react';

interface HeaderProps {
    text: string;
    dishObjects: { id: number, title: string }[];
}

const Header: React.FC<HeaderProps> = ({ text, dishObjects }) => {
    return (
        <div>
            <h1>{text}</h1>
            <ul>
                {dishObjects.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Header;