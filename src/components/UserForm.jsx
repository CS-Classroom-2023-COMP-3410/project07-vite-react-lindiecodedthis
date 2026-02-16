import { useState } from 'react';
import Button from './Button';

function UserForm({ onSubmit, initialData = {} }) {
    const [formData, setFormData] = useState({
        name: initialData.name || '',
        email: initialData.email || '',
        bio: initialData.bio || ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when field is updated
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
        }
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '8px',
        marginBottom: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const errorStyle = {
        color: 'red',
        fontSize: '0.8rem',
        marginBottom: '10px'
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.name && <div style={errorStyle}>{errors.name}</div>}
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="bio">Bio:</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    style={inputStyle}
                />
            </div>

            <Button type="submit" variant="success">
                Save Profile
            </Button>
        </form>
    );
}

export default UserForm;