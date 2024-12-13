import { View, Text, StyleSheet } from 'react-native';

const Section = ({ section }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionName}>{section.sectionName}</Text>
        <Text style={styles.sectionCode}>{section.sectionCode}</Text>
        <Text style={styles.sectionId}>{section.sectionID}</Text>
        <Text style={styles.dateTime}>{section.dateTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F4F6',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: '#232946',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contentContainer: {
    padding: 16,
  },
  sectionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#232946',
    marginBottom: 4,
  },
  sectionCode: {
    fontSize: 14,
    color: '#232946',
    opacity: 0.8,
    marginBottom: 4,
  },
  sectionId: {
    fontSize: 14,
    color: '#232946',
    opacity: 0.7,
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 12,
    color: '#232946',
    opacity: 0.6,
  },
});

export default Section;