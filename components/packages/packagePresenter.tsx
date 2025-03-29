import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './packageStyles';

interface PackageSelectionScreenPresenterProps {
    selectedPackage: string;
    searchQuery: string;
    packages: string[];
    onSearchQueryChange: (query: string) => void;
    onPackageSelect: (pkg: string) => void;
}

const packagePresenter: React.FC<PackageSelectionScreenPresenterProps> = ({
    selectedPackage,
    searchQuery,
    packages,
    onSearchQueryChange,
    onPackageSelect,
}) => {
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
                    onChangeText={onSearchQueryChange}
                    placeholderTextColor="#999"
                />
            </View>

            <Text style={[styles.alignStart]}>Select Your Package</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.slidableContainer}
            >
                {packages.map((pkg) => (
                    <TouchableOpacity
                        key={pkg}
                        style={[
                            styles.packageCard,
                            { backgroundColor: selectedPackage === pkg ? '#1F2937' : 'white' },
                        ]}
                        onPress={() => onPackageSelect(pkg)}
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
                {/* Add other package details here */}
            </View>
        </ScrollView>
    );
};

export default packagePresenter;