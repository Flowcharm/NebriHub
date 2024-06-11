// components/TermsDialog.js
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState, useEffect } from 'react';

export default function TermsDialog({ isOpen, onClose }) {
    const [termsText, setTermsText] = useState('');

    useEffect(() => {
        // Fetch the terms and conditions text from the file
        fetch('../components/TermsDialog.txt')
            .then(response => response.text())
            .then(text => setTermsText(text))
            .catch(err => console.error('Failed to load terms and conditions:', err));
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Términos y Condiciones</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    {termsText || 'Cargando...'}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}
