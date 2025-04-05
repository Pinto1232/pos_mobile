import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './packageStyles';
import { Colors } from '@/constants/Colors';

export type PackageType =
  | 'Starter'
  | 'Growth'
  | 'Custom'
  | 'Enterprise'
  | 'Premium';

interface PackageSelectionScreenPresenterProps {
  selectedPackage: PackageType;
  searchQuery: string;
  packages: PackageType[];
  onSearchQueryChange: (query: string) => void;
  onPackageSelect: (pkg: PackageType) => void;
}

const packageColors = {
  Starter: '#FF3B3B',
  Growth: '#00A8A8',
  Custom: '#1E90FF',
  Enterprise: '#4CAF50',
  Premium: '#FFC107',
};

const PackagePresenter: React.FC<
  PackageSelectionScreenPresenterProps
> = ({
  selectedPackage,
  searchQuery,
  packages,
  onSearchQueryChange,
  onPackageSelect,
}) => {
  const [currentPackage, setCurrentPackage] =
    useState(selectedPackage);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handlePackageSelect = (pkg: PackageType) => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentPackage(pkg);
      slideAnim.setValue(-300);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) =>
      Math.abs(gestureState.dx) > 20,
    onPanResponderRelease: (_, gestureState) => {
      const currentIndex = packages.indexOf(currentPackage);
      if (
        gestureState.dx < -50 &&
        currentIndex < packages.length - 1
      ) {
        const nextPackage = packages[currentIndex + 1];
        onPackageSelect(nextPackage);
        handlePackageSelect(nextPackage);
      } else if (gestureState.dx > 50 && currentIndex > 0) {
        const prevPackage = packages[currentIndex - 1];
        onPackageSelect(prevPackage);
        handlePackageSelect(prevPackage);
      }
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Hello, Maria</Text>
          <Avatar
            rounded
            icon={{
              name: 'user',
              type: 'font-awesome',
              color: Colors.text.white,
            }}
            size='medium'
            containerStyle={styles.avatar}
            overlayContainerStyle={styles.avatarOverlay}
          />
        </View>
        <Text style={styles.welcome}>
          Welcome to Pisval Tech POS
        </Text>
        <View style={styles.searchContainer}>
          <FontAwesome
            name='search'
            size={20}
            color={Colors.text.gray}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder='Search...'
            value={searchQuery}
            onChangeText={onSearchQueryChange}
            placeholderTextColor={Colors.text.gray}
          />
        </View>
      </View>

      <Text style={styles.alignStart}>
        Select Your Package
      </Text>

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
              selectedPackage === pkg
                ? styles.selectedPackageCard
                : styles.unselectedPackageCard,
            ]}
            onPress={() => {
              onPackageSelect(pkg);
              handlePackageSelect(pkg);
            }}
          >
            <Text
              style={[
                styles.packageTitle,
                selectedPackage === pkg
                  ? styles.selectedPackageTitle
                  : styles.unselectedPackageTitle,
              ]}
            >
              {pkg}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View
        style={styles.packageDetailsContainer}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <ImageBackground
            source={require('../../assets/images/pos.png')}
            style={styles.starterSection}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.starterTitle}>
              {currentPackage} Package
            </Text>
            <Text style={styles.welcomeText}>
              {getPackageDescription(currentPackage)}
            </Text>
            <View style={styles.ctaContainer}>
              <TouchableOpacity>
                <Text style={styles.seeMoreLink}>
                  See more
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text
                  style={[
                    styles.buyButtonText,
                    {
                      color: packageColors[currentPackage],
                    },
                  ]}
                >
                  Buy
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const getPackageDescription = (pkg: PackageType) => {
  switch (pkg) {
    case 'Starter':
      return 'Welcome to Pisval Tech POS';
    case 'Growth':
      return 'Expand your business with advanced tools';
    case 'Custom':
      return 'Tailor-made solutions for your needs';
    case 'Enterprise':
      return 'Comprehensive solutions for large businesses';
    case 'Premium':
      return 'Top-tier features for maximum efficiency';
  }
};

export default PackagePresenter;
