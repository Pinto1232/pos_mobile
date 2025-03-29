import React, { useState } from 'react';
import PackageSelectionScreenPresenter from '@/components/packages/packagePresenter';

const packageContainer: React.FC = () => {
    const [selectedPackage, setSelectedPackage] = useState('Starter');
    const [searchQuery, setSearchQuery] = useState('');

    const packages = ['Starter', 'Growth', 'Custom', 'Enterprise', 'Premium'];

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

export default packageContainer;
