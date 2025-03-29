import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
        minHeight: '100%',
        
    },
    header: {
        marginBottom: 30,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    greeting: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    avatar: {
        marginLeft: 10,
    },
    welcome: {
        fontSize: 16,
        color: '#666',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    searchIcon: {
        marginRight: 10,
        color: '#1F2937'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: 'transparent',
        fontSize: 14,
        color: '#D8D8D9',
    },
    packageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        gap: 15,
    },
    slidableContainer: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 5,
        paddingVertical: 10,
    },
    packageCard: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 40,
        backgroundColor: 'white',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)', 
        elevation: 2,
        height: 45, 
        width: 130, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    packageTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    customText: {
        color: '#666',
        fontSize: 14,
    },
    enterButton: {
        backgroundColor: '#2196F3',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 30,
        alignSelf: 'flex-end',
        marginBottom: 30,
    },

    starterSection: {
        backgroundColor: '#F8F9FA',
        borderRadius: 50,
        margin: 10,
        padding: 30,
        width: '95%',
        height: 300,
        zIndex: 999,
        position: 'relative'
    },
    starterTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    welcomeText: {
        color: '#666',
        marginBottom: 20,
    },
    ctaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1F2937',
        padding: 13,
        borderRadius: 55,
        marginTop: 90
    },
    seeMoreLink: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        marginLeft: 82
    },
    buyButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 40,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyButtonText: {
        color: '#1F2937',
        fontWeight: '700',
        alignContent: 'center'
    },
    alignStart: {
        alignSelf: 'flex-start',
        color: '#000',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
    packageDetailsContainer: {
        marginTop: 20,
        padding: 0,
        backgroundColor: '#fff',
        borderRadius: 10,
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        elevation: 3,
    },
});

export default styles;
