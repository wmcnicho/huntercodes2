import React from 'react'
import { Box, Grid, Typography, Link, Card, CardContent, Chip } from '@mui/material';
import publicationsData from '../data/publications.json';

class Pubs extends React.Component {
    constructor(props) {
        super(props); 
    }

    formatAuthors = (authors) => {
        // Bold the author name "McNichols, H." in the author list
        return authors.replace(
            /(McNichols, H\.)/g, 
            '<strong>$1</strong>'
        );
    }

    render() {
        // Sort publications by year (descending) then by id
        const sortedPublications = [...publicationsData.publications].sort((a, b) => {
            if (a.year !== b.year) {
                return b.year - a.year; // Most recent first
            }
            return a.id - b.id; // Then by id for consistent ordering within year
        });

        return(
            <div>
                <Box pt={10}>
                    <Box sx={{textAlign:'left'}} pl={6}>
                        <Typography variant="h4">Publications</Typography>
                    </Box>
                    <Grid container p={4} spacing={3}>
                        
                        {sortedPublications.map((pub) => (
                            <Grid item xs={12} key={pub.id}>
                                <Card sx={{ 
                                    boxShadow: 2, 
                                    '&:hover': { boxShadow: 4 },
                                    transition: 'box-shadow 0.3s ease-in-out'
                                }}>
                                    <CardContent sx={{ textAlign: 'left', p: 3 }}>
                                        <Typography variant="h6" gutterBottom>
                                            {pub.url ? (
                                                <Link 
                                                    href={pub.url} 
                                                    target="_blank"
                                                    color="primary" 
                                                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                                >
                                                    {pub.title}
                                                </Link>
                                            ) : (
                                                pub.title
                                            )}
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            gutterBottom
                                            dangerouslySetInnerHTML={{ __html: this.formatAuthors(pub.authors) }}
                                        />
                                        <Typography variant="body2" color="text.secondary" gutterBottom>
                                            <em>{pub.venue}</em>
                                            {pub.venueDetails && `, ${pub.venueDetails}`} • {pub.year}
                                        </Typography>
                                        {pub.abstract && (
                                            <Typography variant="body1" paragraph sx={{ mt: 2, mb: 2 }}>
                                                {pub.abstract}
                                            </Typography>
                                        )}
                                        {pub.equalContribution && (
                                            <Typography variant="caption" color="text.secondary">
                                                * Equal contribution
                                            </Typography>
                                        )}
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                                            {pub.tags.map((tag, index) => (
                                                <Chip key={index} label={tag} size="small" variant="outlined" />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        {/* Google Scholar Link */}
                        <Grid item xs={12}>
                            <Card sx={{ 
                                boxShadow: 1, 
                                backgroundColor: '#f5f5f5'
                            }}>
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        View my complete publication list and citation metrics on <Link href="https://scholar.google.com/citations?user=ucPEkvoAAAAJ" target="_blank">Google Scholar</Link>.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </div>
        )
    }
}
export default Pubs