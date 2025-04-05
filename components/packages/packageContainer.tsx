import React, { useState } from 'react';
import PackagePresenter from './packagePresenter';
import { PackageType } from './packagePresenter';

const packages: PackageType[] = [
  'Starter',
  'Growth',
  'Custom',
  'Enterprise',
  'Premium',
];

const PackageContainer: React.FC = () => {
  const [selectedPackage, setSelectedPackage] =
    useState<PackageType>('Starter');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PackagePresenter
      selectedPackage={selectedPackage}
      searchQuery={searchQuery}
      packages={packages}
      onSearchQueryChange={setSearchQuery}
      onPackageSelect={setSelectedPackage}
    />
  );
};

export default PackageContainer;
