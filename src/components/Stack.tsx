import React from 'react';

interface StackProps {
    children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            {React.Children.map(children, (child, index) => (
                <div
                    style={{
                        position: 'absolute',
                        top: `${index * 10}px`, // Adjust the spacing between children here
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Stack;