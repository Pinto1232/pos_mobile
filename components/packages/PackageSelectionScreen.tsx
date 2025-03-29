import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './PackageSelectionScreen.styles';

const POSPackages = () => {
    const [selectedPackage, setSelectedPackage] = useState('Starter');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.greeting}>Hello, Maria</Text>
                    <Avatar
                        rounded
                        icon={{ name: 'user', type: 'font-awesome', color: '#fff' }}
                        size="medium"
                        containerStyle={styles.avatar}
                        overlayContainerStyle={{ backgroundColor: '#2196F3' }}
                    />
                </View>
                <Text style={styles.welcome}>Welcome to Pisval Tech POS</Text>
            </View>

            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={[styles.alignStart]}>
                Select Your Package
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.slidableContainer}
            >
                {['Starter', 'Growth', 'Custom', 'Enterprise', 'Premium'].map((pkg) => (
                    <TouchableOpacity
                        key={pkg}
                        style={[
                            styles.packageCard,
                            {
                                backgroundColor: selectedPackage === pkg ? '#1F2937' : 'white',
                            },
                        ]}
                        onPress={() => setSelectedPackage(pkg)}
                    >
                        <Text
                            style={[
                                styles.packageTitle,
                                { color: selectedPackage === pkg ? 'white' : 'black' },
                            ]}
                        >
                            {pkg}
                        </Text>
                        {pkg === 'Custom' && <Text style={styles.customText}></Text>}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.packageDetailsContainer}>
                {selectedPackage === 'Starter' && (
                    <View style={styles.starterSection}>
                        <Text style={styles.starterTitle}>Starter Package</Text>
                        <Text style={styles.welcomeText}>Welcome to Pisval Tech POS</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreLink}>See more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {selectedPackage === 'Growth' && (
                    <View style={styles.starterSection}>
                        <Text style={styles.starterTitle}>Growth Package</Text>
                        <Text style={styles.welcomeText}>Tools to help your business grow</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreLink}>See more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {selectedPackage === 'Custom' && (
                    <View style={styles.starterSection}>
                        <Text style={styles.starterTitle}>Custom Package</Text>
                        <Text style={styles.welcomeText}>Tailor-made solutions for your needs</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreLink}>See more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {selectedPackage === 'Enterprise' && (
                    <View style={styles.starterSection}>
                        <Text style={styles.starterTitle}>Enterprise Package</Text>
                        <Text style={styles.welcomeText}>Advanced features for large businesses</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreLink}>See more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {selectedPackage === 'Premium' && (
                    <View style={styles.starterSection}>
                        <Text style={styles.starterTitle}>Premium Package</Text>
                        <Text style={styles.welcomeText}>Exclusive features for premium users</Text>
                        <View style={styles.ctaContainer}>
                            <TouchableOpacity>
                                <Text style={styles.seeMoreLink}>See more</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buyButtonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default POSPackages;