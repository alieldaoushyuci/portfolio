'use client';
import { useEffect, useRef } from 'react';

export default function PipelineBackground() {
    const scriptsLoadedRef = useRef(false);

    useEffect(() => {
        if (scriptsLoadedRef.current) return;

        const scripts = [
            '/js/noise.min.js',
            '/js/util.js',
            '/js/pipeline.js'
        ];

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const existingScript = document.querySelector(`script[src="${src}"]`);
                if (existingScript) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = src;
                script.async = false;
                script.onload = resolve;
                script.onerror = () => {
                    console.warn(`Failed to load script: ${src}`);
                    resolve();
                };
                document.body.appendChild(script);
            });
        };

        const loadAllScripts = async () => {
            try {
                const container = document.querySelector('.content--canvas');
                if (!container) {
                    console.error('Pipeline container not found');
                    return;
                }

                for (const src of scripts) {
                    await loadScript(src);
                }

                scriptsLoadedRef.current = true;

                setTimeout(() => {
                    const containerCheck = document.querySelector('.content--canvas');
                    if (containerCheck) {
                        if (document.readyState === 'complete') {
                            window.dispatchEvent(new Event('load'));
                        }
                    }
                }, 100);
            } catch (error) {
                console.error('Error loading Pipeline scripts:', error);
            }
        };

        loadAllScripts();
    }, []);

    return (
        <div className="content content--canvas"></div>
    );
}
