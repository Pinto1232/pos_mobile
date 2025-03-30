import React, { useState } from 'react';
import PackageSelectionScreenPresenter, { PackageType } from '@/components/packages/packagePresenter';

const PackageContainer: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState<PackageType>('Starter');
    const [searchQuery, setSearchQuery] = useState('');

    // Explicitly type the packages array
    const packages: PackageType[] = ['Starter', 'Growth', 'Custom', 'Enterprise', 'Premium'];

    return (
        <PackageSelectionScreenPresenter
            selectedPackage={selectedPackage}
            searchQuery={searchQuery}
            packages={packages}
            onSearchQueryChange={setSearchQuery}
            onPackageSelect={setSelectedPackage}
        />
    );
};

export default PackageContainer;