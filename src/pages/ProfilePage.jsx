import { useState } from 'react';
import UserForm from '../components/UserForm';
import Card from '../components/Card';
import Counter from '../components/Counter';
import Button from '../components/Button';

function ProfilePage() {
    // User profile state
    const [userProfile, setUserProfile] = useState({
        name: 'Guest User',
        email: 'guest@example.com',
        bio: 'No bio provided yet.',
        preferences: {
            darkMode: false,
            notifications: true,
            language: 'english'
        },
        stats: {
            visitsCount: 1,
            lastLoginDate: new Date().toLocaleDateString()
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [activityLog, setActivityLog] = useState([
        { action: 'Profile created', timestamp: '2023-10-15 10:30 AM' },
        { action: 'First login', timestamp: '2023-10-15 10:31 AM' }
    ]);

    // Handle form submission
    const handleSubmit = (formData) => {
        const updatedProfile = {
            ...userProfile,
            ...formData
        };

        setUserProfile(updatedProfile);
        setIsEditing(false);

        // Add to activity log
        const newActivity = {
            action: 'Profile updated',
            timestamp: new Date().toLocaleString()
        };

        setActivityLog([newActivity, ...activityLog]);
    };

    // Toggle preferences
    const togglePreference = (preference) => {
        setUserProfile({
            ...userProfile,
            preferences: {
                ...userProfile.preferences,
                [preference]: !userProfile.preferences[preference]
            }
        });

        // Add to activity log
        const newActivity = {
            action: `${preference} preference changed`,
            timestamp: new Date().toLocaleString()
        };

        setActivityLog([newActivity, ...activityLog]);
    };

    // Update visit counter
    const handleVisitCountChange = (newCount) => {
        setUserProfile({
            ...userProfile,
            stats: {
                ...userProfile.stats,
                visitsCount: newCount
            }
        });
    };

    return (
        <div>
            <h1>User Profile</h1>

            {isEditing ? (
                <div style={{ marginBottom: '30px' }}>
                    <h2>Edit Profile</h2>
                    <UserForm
                        onSubmit={handleSubmit}
                        initialData={userProfile}
                    />
                    <Button
                        onClick={() => setIsEditing(false)}
                        variant="secondary"
                        style={{ marginTop: '10px' }}
                    >
                        Cancel
                    </Button>
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                    <Card
                        title={userProfile.name}
                        description={userProfile.bio}
                        imageUrl="https://via.placeholder.com/150"
                        actions={[
                            {
                                label: 'Edit Profile',
                                onClick: () => setIsEditing(true),
                                variant: 'primary'
                            }
                        ]}
                    >
                        <div style={{ marginTop: '10px' }}>
                            <p><strong>Email:</strong> {userProfile.email}</p>
                            <p><strong>Last login:</strong> {userProfile.stats.lastLoginDate}</p>
                        </div>
                    </Card>

                    <div>
                        <h3>Preferences</h3>
                        <div style={{
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px'
                        }}>
                            <div style={{ marginBottom: '10px' }}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={userProfile.preferences.darkMode}
                                        onChange={() => togglePreference('darkMode')}
                                    /> Dark Mode
                                </label>
                            </div>

                            <div style={{ marginBottom: '10px' }}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={userProfile.preferences.notifications}
                                        onChange={() => togglePreference('notifications')}
                                    /> Enable Notifications
                                </label>
                            </div>

                            <div>
                                <label htmlFor="language-select">Language:</label>
                                <select
                                    id="language-select"
                                    value={userProfile.preferences.language}
                                    onChange={(e) => {
                                        setUserProfile({
                                            ...userProfile,
                                            preferences: {
                                                ...userProfile.preferences,
                                                language: e.target.value
                                            }
                                        });

                                        // Add to activity log
                                        const newActivity = {
                                            action: `Language changed to ${e.target.value}`,
                                            timestamp: new Date().toLocaleString()
                                        };

                                        setActivityLog([newActivity, ...activityLog]);
                                    }}
                                    style={{ marginLeft: '10px', padding: '5px' }}
                                >
                                    <option value="english">English</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                    <option value="german">German</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div style={{ display: 'flex', gap: '30px' }}>
                {/* Visit counter */}
                <div style={{ flex: '1' }}>
                    <h3>Visit Counter</h3>
                    <Counter
                        initialValue={userProfile.stats.visitsCount}
                        onCountChange={handleVisitCountChange}
                    />
                    <p>
                        <em>This counter simulates tracking your visits to this page.</em>
                    </p>
                </div>

                {/* Activity log */}
                <div style={{ flex: '1' }}>
                    <h3>Activity Log</h3>
                    <div style={{
                        maxHeight: '300px',
                        overflowY: 'auto',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '8px'
                    }}>
                        {activityLog.map((activity, index) => (
                            <div key={index} style={{
                                padding: '8px',
                                borderBottom: index < activityLog.length - 1 ? '1px solid #eee' : 'none'
                            }}>
                                <div style={{ fontWeight: 'bold' }}>{activity.action}</div>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>{activity.timestamp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;