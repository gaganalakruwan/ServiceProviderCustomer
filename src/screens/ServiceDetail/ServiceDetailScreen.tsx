import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, StatusBar,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../component/AppHeader/AppHeader';
import AppButton from '../../component/AppButton/AppButton';
import StarRating from '../../component/StarRating/StarRating';

const BADGES = ['✓ Certified', '✓ 2hr Response', '✓ Warranty', '✓ Insured'];

export default function ServiceDetailScreen({ navigation, route }) {
  const service = route?.params?.service ?? {
    id: '1', name: 'AC Repair & Service', price: 'Rs. 2,500',
    rating: 4.2, reviews: 128, emoji: '❄️', bgColor: '#E1F5EE',
    desc: 'Professional AC cleaning, gas refill & repair',
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Top Bar */}
      <AppHeader
        title="Service Details"
        onBack={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Service Image */}
        <View style={[styles.heroImage, { backgroundColor: service.bgColor ?? '#E1F5EE' }]}>
          <Text style={{ fontSize: 72 }}>{service.emoji}</Text>
        </View>

        <View style={styles.content}>
          {/* Header */}
          <View style={styles.nameRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3, marginTop: 6 }}>
                {[1].map(i => (
                    <StarRating rating={service.rating} reviews={service.reviews} />
                ))}
              </View>
            </View>
            <View style={styles.priceBadge}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceValue}>{service.price}</Text>
            </View>
          </View>

          {/* Badges */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 14 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {BADGES.map(b => (
                <View key={b} style={styles.badge}>
                  <Text style={styles.badgeText}>{b}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Description */}
          <Text style={styles.sectionLabel}>About this Service</Text>
          <Text style={styles.desc}>
            Professional {service.name} and maintenance service. Includes full inspection, repair or replacement of faulty parts, and performance testing. Our certified technicians handle all major brands and guarantee quality workmanship.
          </Text>

          {/* What's Included */}
          <Text style={[styles.sectionLabel, { marginTop: 18 }]}>What's Included</Text>
          {[
            'Full inspection & diagnosis',
            'Repair or replacement of faulty parts',
            'Performance & safety testing',
            'Before & after photos',
            '30-day service warranty',
          ].map((item, i) => (
            <View key={i} style={styles.includeRow}>
              <View style={styles.checkDot} />
              <Text style={styles.includeText}>{item}</Text>
            </View>
          ))}

          {/* Reviews */}
          <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Recent Reviews</Text>
          {[
            { name: 'Amara P.', rating: 5, comment: 'Excellent service! Very professional and on time.' },
            { name: 'Nimal S.', rating: 4, comment: 'Good work, would recommend to others.' },
          ].map((r, i) => (
            <View key={i} style={styles.reviewCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{r.name[0]}</Text>
                </View>
                <View>
                  <Text style={styles.reviewName}>{r.name}</Text>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    {[1,2,3,4,5].map(i => (
                      <Text key={i} style={{ fontSize: 10, color: i <= r.rating ? COLORS.warning : COLORS.gray200 }}>★</Text>
                    ))}
                  </View>
                </View>
              </View>
              <Text style={styles.reviewComment}>{r.comment}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Sticky Book Now */}
      <View style={styles.bookBar}>
        <View>
          <Text style={styles.bookPriceLabel}>Starting from</Text>
          <Text style={styles.bookPriceValue}>{service.price}</Text>
        </View>

        {/* App Button */}
        <AppButton
          title="Book Now"
          onPress={() => navigation.navigate('Booking', { service })}
          style={styles.bookBtn}
          textStyle={styles.bookBtnText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.white 
  },
  topBar: { 
    backgroundColor: COLORS.primary, 
    paddingHorizontal: 16, 
    paddingVertical: 12 
  },
  backText: { 
    color: 'rgba(255,255,255,0.9)', 
    fontSize: 13 
  },
  heroImage: { 
    height: 180, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  content: { 
    padding: 18 
  },
  nameRow: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    gap: 12 
  },
  serviceName: { 
    fontSize: 20, 
    ...FONTS.bold, 
    color: COLORS.gray800 
  },
  ratingText: { 
    fontSize: 11, 
    color: COLORS.gray400, 
    marginLeft: 4 
  },
  priceBadge: {
    backgroundColor: COLORS.primaryLight, 
    borderRadius: RADIUS.md,
    padding: 10, 
    alignItems: 'center', 
    minWidth: 80,
  },
  priceLabel: { 
    fontSize: 10, 
    color: COLORS.primary, 
    ...FONTS.medium 
  },
  priceValue: { 
    fontSize: 14, 
    color: COLORS.primary, 
    ...FONTS.bold 
  },
  badge: {
    backgroundColor: COLORS.primaryLight, 
    borderRadius: RADIUS.full,
    paddingHorizontal: 12, 
    paddingVertical: 6,
  },
  badgeText: { 
    fontSize: 11, 
    color: COLORS.primary, 
    ...FONTS.medium 
  },
  sectionLabel: { 
    fontSize: 14, 
    ...FONTS.semibold, 
    color: COLORS.gray800, 
    marginBottom: 8 
  },
  desc: { 
    fontSize: 13, 
    color: COLORS.gray600, 
    lineHeight: 20 
  },
  includeRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 10, 
    marginBottom: 8 
  },
  checkDot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: COLORS.primary 
  },
  includeText: { 
    fontSize: 13, 
    color: COLORS.gray600 
  },
  reviewCard: {
    backgroundColor: COLORS.gray50, 
    borderRadius: RADIUS.md,
    padding: 12, 
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: COLORS.gray200,
  },
  avatar: {
    width: 34, 
    height: 34, 
    borderRadius: 17,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  avatarText: { 
    fontSize: 14, 
    color: COLORS.primary, 
    ...FONTS.semibold 
  },
  reviewName: { 
    fontSize: 12, 
    ...FONTS.semibold, 
    color: COLORS.gray800 
  },
  reviewComment: { 
    fontSize: 12, 
    color: COLORS.gray600, 
    lineHeight: 17 
  },
  bookBar: {
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0,
    backgroundColor: COLORS.white, 
    padding: 16,
    borderTopWidth: 1, 
    borderTopColor: COLORS.gray200,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    ...SHADOW.md,
  },
  bookPriceLabel: { 
    fontSize: 11, 
    color: COLORS.gray400 
  },
  bookPriceValue: { 
    fontSize: 16, 
    ...FONTS.bold, 
    color: COLORS.primary 
  },
  bookBtn: {
    backgroundColor: COLORS.primary, 
    borderRadius: RADIUS.md,
    paddingHorizontal: 32, 
    paddingVertical: 14,
  },
  bookBtnText: { 
    color: COLORS.white, 
    fontSize: 15, 
    ...FONTS.semibold 
  },
});
