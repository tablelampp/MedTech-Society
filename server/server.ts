import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'MedTech Society API is running',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/about', (req, res) => {
    res.json({
        name: 'MedTech Society',
        description: 'Advancing medical technology through innovation, collaboration, and community.',
        mission: 'To foster innovation in medical technology through collaboration, education, and research.',
        services: [
            'Healthcare Innovation',
            'Digital Health Solutions',
            'Professional Community Building',
            'Research & Development'
        ]
    });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, message });
    
    res.json({
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
    });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`🚀 MedTech Society server running on port ${PORT}`);
    console.log(`📱 Client available at: http://localhost:${PORT}`);
    console.log(`🔧 API health check: http://localhost:${PORT}/api/health`);
});
