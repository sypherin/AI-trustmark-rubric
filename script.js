// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.getElementById('modal-body');

    // Navigation switching
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Pillar card interactions
    document.querySelectorAll('.pillar-card').forEach(card => {
        card.addEventListener('click', function() {
            const pillar = this.getAttribute('data-pillar');
            showPillarDetails(pillar);
        });
    });

    // Evidence item interactions
    document.querySelectorAll('.evidence-item').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showEvidenceDetails(title);
        });
    });

    // Test category interactions
    document.querySelectorAll('.test-category').forEach(category => {
        category.addEventListener('click', function() {
            const categoryType = this.getAttribute('data-category');
            showTestCategoryDetails(categoryType);
        });
    });

    // Test result interactions
    document.querySelectorAll('.result-row').forEach(row => {
        row.addEventListener('click', function() {
            const testType = this.querySelector('.result-type').textContent;
            const severity = this.querySelector('.result-severity').textContent;
            showTestResultDetails(testType, severity);
        });
    });

    // Alert interactions
    document.querySelectorAll('.alert-item').forEach(alert => {
        alert.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showAlertDetails(title);
        });
    });

    // Detection rule interactions
    document.querySelectorAll('.rule-card').forEach(rule => {
        rule.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showRuleDetails(title);
        });
    });

    // Flow node interactions
    document.querySelectorAll('.flow-node').forEach(node => {
        node.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showFlowNodeDetails(title);
        });
    });

    // Integration card interactions
    document.querySelectorAll('.integration-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showIntegrationDetails(title);
        });
    });

    // Run tests button
    document.querySelector('.run-tests')?.addEventListener('click', function() {
        showTestExecution();
    });

    // Alert action buttons
    document.querySelectorAll('.alert-actions button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.textContent;
            showActionConfirmation(action);
        });
    });

    // Modal close functionality
    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Modal detail functions
    function showPillarDetails(pillar) {
        const pillarData = {
            security: {
                title: 'Security & Safety Pillar',
                score: 92,
                details: [
                    'Vulnerability Assessment: Passed',
                    'Penetration Testing: 2 minor issues resolved',
                    'Data Protection: Fully compliant',
                    'Access Controls: Multi-factor authentication enabled',
                    'Encryption: AES-256 for data at rest and in transit'
                ],
                recommendations: [
                    'Schedule quarterly security reviews',
                    'Implement additional API rate limiting',
                    'Consider zero-trust architecture'
                ]
            },
            compliance: {
                title: 'Compliance & Governance Pillar',
                score: 85,
                details: [
                    'ISO 42001 Alignment: 85% complete',
                    'GDPR Compliance: Fully compliant',
                    'Audit Trail: Complete and verified',
                    'Documentation: Up to date',
                    'Risk Assessment: Completed monthly'
                ],
                recommendations: [
                    'Complete remaining ISO 42001 requirements',
                    'Implement automated compliance monitoring',
                    'Schedule external audit'
                ]
            },
            impact: {
                title: 'People & Impact Pillar',
                score: 84,
                details: [
                    'Bias Testing: Minimal bias detected',
                    'Fairness Metrics: Within acceptable ranges',
                    'User Feedback: 4.2/5 satisfaction rating',
                    'Accessibility: WCAG 2.1 AA compliant',
                    'Transparency: Clear AI disclosure implemented'
                ],
                recommendations: [
                    'Expand bias testing to additional demographics',
                    'Implement user feedback loop improvements',
                    'Enhance explainability features'
                ]
            }
        };

        const data = pillarData[pillar];
        modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <div style="display: flex; align-items: center; gap: 1rem; margin: 1rem 0;">
                <div style="font-size: 2rem; font-weight: bold; color: #10b981;">${data.score}</div>
                <div style="color: #64748b;">Current Score</div>
            </div>
            <h3>Assessment Details</h3>
            <ul style="margin-bottom: 2rem;">
                ${data.details.map(detail => `<li style="margin-bottom: 0.5rem;">${detail}</li>`).join('')}
            </ul>
            <h3>Recommendations</h3>
            <ul>
                ${data.recommendations.map(rec => `<li style="margin-bottom: 0.5rem;">${rec}</li>`).join('')}
            </ul>
        `;
        modal.style.display = 'block';
    }

    function showEvidenceDetails(title) {
        const evidenceData = {
            'Security Assessment Report': {
                type: 'Security Report',
                date: 'October 15, 2025',
                status: 'Verified',
                description: 'Comprehensive security assessment conducted by Veris Red team including penetration testing, vulnerability scanning, and threat modeling.',
                findings: [
                    'No critical vulnerabilities found',
                    '2 medium-risk issues identified and resolved',
                    'All security controls functioning properly',
                    'Compliance with security best practices confirmed'
                ]
            },
            'Compliance Audit Trail': {
                type: 'Compliance Documentation',
                date: 'October 10, 2025',
                status: 'Verified',
                description: 'Complete audit trail demonstrating ISO 42001 alignment and regulatory compliance.',
                findings: [
                    'Documentation completeness: 95%',
                    'Process adherence: Excellent',
                    'Risk management: Properly implemented',
                    'Governance structure: Well-defined'
                ]
            },
            'Blue Team Monitoring Logs': {
                type: 'Monitoring Data',
                date: 'October 21, 2025',
                status: 'Processing',
                description: '30-day continuous monitoring summary from Veris Blue defensive systems.',
                findings: [
                    'System uptime: 99.7%',
                    'Threats detected and blocked: 127',
                    'False positive rate: 2.1%',
                    'Response time: Average 4.7 minutes'
                ]
            }
        };

        const data = evidenceData[title] || {
            type: 'Evidence Document',
            date: 'Recent',
            status: 'Verified',
            description: 'Supporting documentation for AI system trustworthiness assessment.',
            findings: ['Evidence successfully validated', 'Contributes to overall trust score']
        };

        modalBody.innerHTML = `
            <h2>${title}</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; padding: 1rem; background: #f8fafc; border-radius: 0.5rem;">
                <div><strong>Type:</strong> ${data.type}</div>
                <div><strong>Date:</strong> ${data.date}</div>
                <div><strong>Status:</strong> <span style="color: ${data.status === 'Verified' ? '#10b981' : '#f59e0b'};">${data.status}</span></div>
            </div>
            <h3>Description</h3>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <h3>Key Findings</h3>
            <ul>
                ${data.findings.map(finding => `<li style="margin-bottom: 0.5rem;">${finding}</li>`).join('')}
            </ul>
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                <button class="btn-primary">Download Report</button>
                <button class="btn-secondary">View Details</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showTestCategoryDetails(category) {
        const categoryData = {
            injection: {
                title: 'Prompt Injection Tests',
                description: 'Tests designed to identify vulnerabilities to prompt injection attacks where malicious input attempts to override system instructions.',
                tests: [
                    'Direct instruction override attempts',
                    'Context window manipulation',
                    'System prompt extraction',
                    'Role-playing injection scenarios',
                    'Multi-turn conversation hijacking'
                ],
                lastRun: 'October 20, 2025',
                successRate: '92%'
            },
            jailbreak: {
                title: 'Jailbreak Tests',
                description: 'Attempts to bypass safety guardrails and content policies through various manipulation techniques.',
                tests: [
                    'DAN (Do Anything Now) variants',
                    'Hypothetical scenario exploitation',
                    'Character roleplay bypasses',
                    'Technical jargon obfuscation'
                ],
                lastRun: 'October 18, 2025',
                successRate: '88%'
            },
            exfil: {
                title: 'Data Exfiltration Tests',
                description: 'Simulated attempts to extract sensitive information or training data from the AI system.',
                tests: [
                    'Training data extraction attempts',
                    'System configuration probing',
                    'Memory leak exploitation',
                    'Side-channel information gathering'
                ],
                lastRun: 'October 16, 2025',
                successRate: '95%'
            },
            hallucination: {
                title: 'Hallucination Testing',
                description: 'Tests to evaluate the system\'s tendency to generate false or misleading information.',
                tests: [
                    'Factual accuracy verification',
                    'Citation and source validation',
                    'Confidence calibration testing',
                    'Edge case response evaluation',
                    'Consistency across similar queries'
                ],
                lastRun: 'October 19, 2025',
                successRate: '89%'
            }
        };

        const data = categoryData[category];
        modalBody.innerHTML = `
            <h2>${data.title}</h2>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1rem 0; padding: 1rem; background: #f8fafc; border-radius: 0.5rem;">
                <div><strong>Last Run:</strong> ${data.lastRun}</div>
                <div><strong>Success Rate:</strong> ${data.successRate}</div>
            </div>
            <h3>Test Types</h3>
            <ul style="margin-bottom: 2rem;">
                ${data.tests.map(test => `<li style="margin-bottom: 0.5rem;">${test}</li>`).join('')}
            </ul>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-primary">Run Tests</button>
                <button class="btn-secondary">View History</button>
                <button class="btn-secondary">Configure</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showTestResultDetails(testType, severity) {
        modalBody.innerHTML = `
            <h2>Test Result: ${testType}</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; padding: 1rem; background: #f8fafc; border-radius: 0.5rem;">
                <div><strong>Severity:</strong> <span style="color: ${severity === 'High' ? '#ef4444' : severity === 'Medium' ? '#f59e0b' : '#10b981'};">${severity}</span></div>
                <div><strong>Date:</strong> October 20, 2025</div>
                <div><strong>Duration:</strong> 45 minutes</div>
            </div>
            <h3>Executive Summary</h3>
            <p style="margin-bottom: 1.5rem;">The ${testType.toLowerCase()} identified ${severity === 'High' ? '2 critical vulnerabilities' : severity === 'Medium' ? '1 moderate issue' : 'no significant issues'} that require attention.</p>
            <h3>Findings</h3>
            <ul style="margin-bottom: 2rem;">
                <li>System response to malicious prompts: ${severity === 'High' ? 'Vulnerable' : 'Partially resistant'}</li>
                <li>Guardrail effectiveness: ${severity === 'High' ? 'Needs improvement' : 'Good'}</li>
                <li>Data leakage risk: ${severity === 'High' ? 'Medium' : 'Low'}</li>
            </ul>
            <h3>Recommendations</h3>
            <ul style="margin-bottom: 2rem;">
                <li>Implement additional input validation</li>
                <li>Strengthen content filtering mechanisms</li>
                <li>Regular security training for development team</li>
            </ul>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-primary">Download Full Report</button>
                <button class="btn-secondary">Create Ticket</button>
                <button class="btn-secondary">Schedule Retest</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showAlertDetails(title) {
        const alertData = {
            'Suspicious Prompt Pattern Detected': {
                severity: 'High',
                description: 'Multiple prompt injection attempts detected from a single IP address within a short time frame.',
                details: [
                    'Source IP: 192.168.1.45',
                    'Attempts: 15 in 5 minutes',
                    'Pattern: Direct instruction override',
                    'Status: Automatically blocked'
                ],
                timeline: [
                    '14:32 - First injection attempt detected',
                    '14:33 - Pattern recognition triggered',
                    '14:34 - IP address flagged',
                    '14:35 - Automatic blocking initiated'
                ]
            },
            'Unusual API Usage Pattern': {
                severity: 'Medium',
                description: 'User account showing unusual API usage patterns that may indicate automated abuse.',
                details: [
                    'User: user_12345',
                    'Requests: 1,200 in 1 hour',
                    'Pattern: Rapid sequential calls',
                    'Status: Monitoring'
                ],
                timeline: [
                    '13:45 - Usage spike detected',
                    '14:00 - Pattern analysis completed',
                    '14:15 - Alert generated',
                    '14:30 - Investigation ongoing'
                ]
            }
        };

        const data = alertData[title] || {
            severity: 'Medium',
            description: 'Security alert requiring investigation.',
            details: ['Alert details not available'],
            timeline: ['Alert generated']
        };

        modalBody.innerHTML = `
            <h2>${title}</h2>
            <div style="display: inline-block; padding: 0.5rem 1rem; background: ${data.severity === 'High' ? '#fecaca' : '#fef3c7'}; color: ${data.severity === 'High' ? '#991b1b' : '#92400e'}; border-radius: 0.5rem; margin-bottom: 1rem;">
                ${data.severity} Severity
            </div>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <h3>Alert Details</h3>
            <ul style="margin-bottom: 2rem;">
                ${data.details.map(detail => `<li style="margin-bottom: 0.5rem;">${detail}</li>`).join('')}
            </ul>
            <h3>Timeline</h3>
            <ul style="margin-bottom: 2rem;">
                ${data.timeline.map(event => `<li style="margin-bottom: 0.5rem;">${event}</li>`).join('')}
            </ul>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-primary">Investigate</button>
                <button class="btn-secondary">Block Source</button>
                <button class="btn-secondary">Mark Resolved</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showRuleDetails(title) {
        const ruleData = {
            'Prompt Injection Detection': {
                status: 'Active',
                description: 'Machine learning-based detection system for identifying prompt injection attempts.',
                configuration: [
                    'Confidence threshold: 85%',
                    'Response time: < 100ms',
                    'Training data: Updated weekly',
                    'False positive rate: 2.1%'
                ],
                performance: [
                    'Triggers today: 23',
                    'True positives: 22',
                    'False positives: 1',
                    'Accuracy: 95.7%'
                ]
            },
            'Data Leakage Prevention': {
                status: 'Active',
                description: 'Pattern matching system to prevent sensitive data exposure in AI responses.',
                configuration: [
                    'Pattern library: 150+ patterns',
                    'Sensitivity: High',
                    'Redaction: Automatic',
                    'Logging: Full audit trail'
                ],
                performance: [
                    'Triggers today: 5',
                    'Data blocked: 5 instances',
                    'False positives: 0',
                    'Accuracy: 100%'
                ]
            },
            'Behavioral Drift Detection': {
                status: 'Inactive',
                description: 'Monitors AI model outputs for consistency and behavioral changes over time.',
                configuration: [
                    'Baseline: Established Oct 1',
                    'Threshold: 15% deviation',
                    'Sampling: 1% of responses',
                    'Analysis: Daily'
                ],
                performance: [
                    'Last trigger: 3 days ago',
                    'Drift detected: Minimal',
                    'Confidence: 92%',
                    'Status: Stable'
                ]
            }
        };

        const data = ruleData[title] || {
            status: 'Active',
            description: 'Detection rule for AI security monitoring.',
            configuration: ['Configuration not available'],
            performance: ['Performance data not available']
        };

        modalBody.innerHTML = `
            <h2>${title}</h2>
            <div style="display: inline-block; padding: 0.5rem 1rem; background: ${data.status === 'Active' ? '#dcfce7' : '#f1f5f9'}; color: ${data.status === 'Active' ? '#166534' : '#64748b'}; border-radius: 0.5rem; margin-bottom: 1rem;">
                ${data.status}
            </div>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h3>Configuration</h3>
                    <ul>
                        ${data.configuration.map(config => `<li style="margin-bottom: 0.5rem;">${config}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Performance</h3>
                    <ul>
                        ${data.performance.map(perf => `<li style="margin-bottom: 0.5rem;">${perf}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn-primary">${data.status === 'Active' ? 'Configure' : 'Activate'}</button>
                <button class="btn-secondary">View Logs</button>
                <button class="btn-secondary">Test Rule</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showFlowNodeDetails(title) {
        const nodeData = {
            'AI System': {
                description: 'Customer Service Bot v2.1 - Production AI system serving customer inquiries.',
                metrics: [
                    'Daily requests: 15,000+',
                    'Response time: 1.2s average',
                    'Satisfaction: 4.2/5',
                    'Uptime: 99.7%'
                ],
                integrations: [
                    'Veris Core: Evidence submission',
                    'Veris Red: Security testing',
                    'Veris Blue: Monitoring telemetry'
                ]
            },
            'Veris Core': {
                description: 'Central assessment engine calculating trust scores and managing evidence.',
                metrics: [
                    'Trust Score: 87/100',
                    'Evidence items: 47',
                    'Last assessment: Oct 21',
                    'Badge status: Gold'
                ],
                integrations: [
                    'Red Team: Security findings',
                    'Blue Team: Monitoring data',
                    'External APIs: Badge publishing'
                ]
            },
            'Veris Red': {
                description: 'Adversarial testing platform conducting security assessments.',
                metrics: [
                    'Active tests: 3',
                    'Completed tests: 127',
                    'Vulnerabilities found: 8',
                    'Success rate: 91%'
                ],
                integrations: [
                    'Target systems: 3 connected',
                    'CI/CD pipelines: 2 integrated',
                    'Report generation: Automated'
                ]
            },
            'Veris Blue': {
                description: 'Continuous monitoring and defensive security platform.',
                metrics: [
                    'Active alerts: 2',
                    'Threats blocked: 127 (24h)',
                    'MTTD: 2.3 seconds',
                    'MTTR: 4.7 minutes'
                ],
                integrations: [
                    'SIEM systems: Connected',
                    'Alert channels: 5 configured',
                    'Playbooks: 12 automated'
                ]
            }
        };

        const data = nodeData[title] || {
            description: 'System component in the Veris architecture.',
            metrics: ['Metrics not available'],
            integrations: ['Integration data not available']
        };

        modalBody.innerHTML = `
            <h2>${title}</h2>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h3>Key Metrics</h3>
                    <ul>
                        ${data.metrics.map(metric => `<li style="margin-bottom: 0.5rem;">${metric}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Integrations</h3>
                    <ul>
                        ${data.integrations.map(integration => `<li style="margin-bottom: 0.5rem;">${integration}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn-primary">View Dashboard</button>
                <button class="btn-secondary">Configuration</button>
                <button class="btn-secondary">API Docs</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showIntegrationDetails(title) {
        const integrationData = {
            'SharePoint': {
                status: 'Connected',
                description: 'Microsoft SharePoint integration for evidence document management and collaboration.',
                configuration: [
                    'Site URL: https://company.sharepoint.com/veris',
                    'Authentication: OAuth 2.0',
                    'Sync frequency: Real-time',
                    'Document types: PDF, DOCX, XLSX'
                ],
                activity: [
                    'Documents synced: 47',
                    'Last sync: 2 minutes ago',
                    'Errors: 0',
                    'Storage used: 2.3 GB'
                ]
            },
            'Credly': {
                status: 'Connected',
                description: 'Digital badge platform for publishing verified AI trustmark credentials.',
                configuration: [
                    'Organization ID: veris-ai-trust',
                    'Badge template: AI Trustmark v1.0',
                    'Auto-publish: Enabled',
                    'Verification: Blockchain-backed'
                ],
                activity: [
                    'Badges issued: 12',
                    'Last badge: Oct 20, 2025',
                    'Verification rate: 100%',
                    'Public views: 1,247'
                ]
            },
            'IMDA Trustmark': {
                status: 'Pending',
                description: 'Singapore IMDA AI Governance Testing Framework integration for regulatory compliance.',
                configuration: [
                    'Application ID: TM-2025-0847',
                    'Framework version: 2.0',
                    'Submission date: Oct 15, 2025',
                    'Review status: In progress'
                ],
                activity: [
                    'Documents submitted: 23',
                    'Review progress: 60%',
                    'Expected approval: Nov 5, 2025',
                    'Compliance score: 85%'
                ]
            },
            'Confluence': {
                status: 'Disconnected',
                description: 'Atlassian Confluence integration for documentation and knowledge management.',
                configuration: [
                    'Server URL: Not configured',
                    'Authentication: Required',
                    'Space: veris-documentation',
                    'Auto-sync: Disabled'
                ],
                activity: [
                    'Last connection: Never',
                    'Documents: 0',
                    'Configuration: Incomplete',
                    'Status: Setup required'
                ]
            }
        };

        const data = integrationData[title] || {
            status: 'Unknown',
            description: 'External system integration.',
            configuration: ['Configuration not available'],
            activity: ['Activity data not available']
        };

        const statusColor = data.status === 'Connected' ? '#10b981' : data.status === 'Pending' ? '#f59e0b' : '#ef4444';

        modalBody.innerHTML = `
            <h2>${title} Integration</h2>
            <div style="display: inline-block; padding: 0.5rem 1rem; background: ${statusColor}20; color: ${statusColor}; border-radius: 0.5rem; margin-bottom: 1rem;">
                ${data.status}
            </div>
            <p style="margin-bottom: 1.5rem;">${data.description}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <h3>Configuration</h3>
                    <ul>
                        ${data.configuration.map(config => `<li style="margin-bottom: 0.5rem;">${config}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Activity</h3>
                    <ul>
                        ${data.activity.map(activity => `<li style="margin-bottom: 0.5rem;">${activity}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn-primary">${data.status === 'Connected' ? 'Manage' : data.status === 'Pending' ? 'Check Status' : 'Configure'}</button>
                <button class="btn-secondary">Test Connection</button>
                <button class="btn-secondary">View Logs</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showTestExecution() {
        modalBody.innerHTML = `
            <h2>Test Execution Started</h2>
            <p style="margin-bottom: 1.5rem;">Running selected adversarial tests against Customer Service Bot v2.1...</p>
            <div style="background: #f8fafc; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                <h3>Test Progress</h3>
                <div style="margin: 1rem 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Prompt Injection Tests</span>
                        <span style="color: #10b981;">✓ Complete</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Jailbreak Tests</span>
                        <span style="color: #f59e0b;">⏳ Running...</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Hallucination Tests</span>
                        <span style="color: #64748b;">⏸ Queued</span>
                    </div>
                </div>
                <div style="background: #e5e7eb; height: 8px; border-radius: 4px; margin-top: 1rem;">
                    <div style="background: #3b82f6; height: 8px; border-radius: 4px; width: 45%; transition: width 0.3s;"></div>
                </div>
                <div style="text-align: center; margin-top: 0.5rem; color: #64748b;">45% Complete</div>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button class="btn-secondary">View Live Results</button>
                <button class="btn-secondary">Cancel Tests</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function showActionConfirmation(action) {
        modalBody.innerHTML = `
            <h2>Confirm Action: ${action}</h2>
            <p style="margin-bottom: 1.5rem;">Are you sure you want to ${action.toLowerCase()}? This action will be logged and may affect system operations.</p>
            <div style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
                <strong>Warning:</strong> This action will be executed immediately and cannot be undone.
            </div>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button class="btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn-primary">Confirm ${action}</button>
            </div>
        `;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Make closeModal available globally
    window.closeModal = closeModal;

    // Add some dynamic updates to simulate real-time data
    setInterval(function() {
        // Update threat count
        const threatCount = document.querySelector('.metric-card .metric-value');
        if (threatCount && threatCount.textContent !== '99.7%') {
            const current = parseInt(threatCount.textContent);
            if (Math.random() > 0.7) {
                threatCount.textContent = (current + Math.floor(Math.random() * 3)).toString();
            }
        }

        // Update alert timestamps
        document.querySelectorAll('.alert-time').forEach(time => {
            if (time.textContent.includes('minutes ago')) {
                const minutes = parseInt(time.textContent);
                if (minutes < 60) {
                    time.textContent = `${minutes + 1} minutes ago`;
                }
            }
        });
    }, 30000); // Update every 30 seconds
});