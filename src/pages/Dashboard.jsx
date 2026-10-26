
import { useEffect } from 'react';

function Dashboard() {
    useEffect(() => {
        fetch('/mock-dashboard.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch dashboard data');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Dashboard data:', data);
            })
            .catch((error) => {
                console.error('Dashboard fetch error:', error);
            });
    }, []);

    return (
        <section className="page">
            <p className="eyebrow">Workspace Dashboard</p>
            <h1>Dashboard coming soon</h1>
            <p className="lead">This section will be built by the team working on the dashboard data view.</p>
        </section>
    )
}

export default Dashboard
