'use client';
import { useEffect, useRef } from 'react';

export default function PipelineBackground() {
    const scriptsLoadedRef = useRef(false);

    useEffect(() => {
        if (scriptsLoadedRef.current) return;

        const scripts = [
            '/portfolio/js/noise.min.js',
            '/portfolio/js/util.js',
            '/portfolio/js/pipeline.js'
        ];

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                // Check if script already exists
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
                    resolve(); // Continue even if one script fails
                };
                document.body.appendChild(script);
            });
        };

        const loadAllScripts = async () => {
            try {
                // Ensure container exists before loading scripts
                const container = document.querySelector('.content--canvas');
                if (!container) {
                    console.error('Pipeline container not found');
                    return;
                }

                for (const src of scripts) {
                    await loadScript(src);
                }

                scriptsLoadedRef.current = true;

                // pipeline.js adds window.addEventListener('load', setup)
                // If window already loaded, manually trigger setup
                // Wait a tick to ensure all scripts are fully executed
                setTimeout(() => {
                    // Check if setup function exists and container is available
                    const containerCheck = document.querySelector('.content--canvas');
                    if (containerCheck) {
                        // Dispatch a load event to trigger pipeline.js setup
                        // Or manually call setup if accessible
                        if (document.readyState === 'complete') {
                            // Window already loaded, manually trigger
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
