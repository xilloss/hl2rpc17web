

// Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                
                // Randomly assign orange or blue color
                if (Math.random() > 0.5) {
                    particle.style.setProperty('--particle-color', '#ffffffff');
                    const before = particle.style.getPropertyValue('--particle-color');
                    particle.style.background = '#ffffffff';
                }
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Mission Tabs Functionality
        const missionTabs = document.querySelectorAll('.mission-tab');
        const missionContents = document.querySelectorAll('.mission-content');

        missionTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                missionTabs.forEach(t => t.classList.remove('active'));
                missionContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Show corresponding content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });



        // Initialize particles
        createParticles();

        