import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, StatusBar, Modal,
} from 'react-native';
import { COLORS, RADIUS, FONTS, SHADOW } from '../../theme/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../component/AppHeader/AppHeader';
import AppButton from '../../component/AppButton/AppButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const BADGE = {
  active: { bg: '#E1F5EE', color: '#0F6E56', label: 'Active' },
  done: { bg: '#EAF3DE', color: '#3B6D11', label: 'Completed' },
  pending: { bg: '#FAEEDA', color: '#854F0B', label: 'Pending' },
};

export default function OrderDetailScreen({ navigation, route }) {
  const order = route?.params?.order ?? {
    id: 'ORD-001', service: 'AC Repair & Service', date: 'Mar 16, 2026', time: '9:15 AM',
    status: 'Active', badge: 'active', technician: 'Kamal Perera', price: 'Rs. 2,500', emoji: '❄️',
  };

  const [showEmp, setShowEmp] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const badge = BADGE[order.badge] ?? BADGE.active;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <AppHeader
        title="Order Details"
        onBack={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Title */}
        <View style={styles.titleCard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.orderService}>{order.service}</Text>
            <View style={[styles.badge, { backgroundColor: badge.bg }]}>
              <Text style={[styles.badgeText, { color: badge.color }]}>{badge.label}</Text>
            </View>
          </View>
          <Text style={styles.orderId}>{order.id}</Text>
        </View>

        {/* Info */}
        <View style={styles.infoCard}>
          {[
            { label: 'Order Name', value: order.service },
            { label: 'Status', value: order.status },
            { label: 'Date', value: order.date },
            { label: 'Time', value: order.time },
            { label: 'Price', value: order.price },
          ].map(({ label, value }) => (
            <View key={label} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{label}</Text>
              <Text style={[styles.infoValue, label === 'Price' && { color: COLORS.primary, ...FONTS.semibold }]}>{value}</Text>
            </View>
          ))}
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <View style={styles.descBox}>
            <Text style={styles.descText}>AC unit making loud noise and not cooling properly. Needs full service check and possible gas refill.</Text>
          </View>
        </View>

        {/* Images */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Images</Text>
          <View style={styles.imageRow}>
            <View style={styles.imgBox}><Text style={{ fontSize: 22 }}>🖼️</Text></View>
            <View style={styles.imgBox}><Text style={{ fontSize: 22 }}>🖼️</Text></View>
            <View style={[styles.imgBox, { backgroundColor: COLORS.primaryLight }]}>
              <Text style={{ fontSize: 12, ...FONTS.semibold, color: COLORS.primary }}>+5</Text>
            </View>
          </View>
        </View>

        {/* Tracking */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Tracking</Text>
          {[
            { label: 'Order Requested', time: 'Mar 15, 2026 · 4:30 PM', done: true },
            { label: 'Technician Assigned', time: 'Mar 16, 2026 · 8:00 AM', done: true },
            { label: 'Job Started', time: 'Mar 16, 2026 · 9:15 AM', done: order.badge === 'active' || order.badge === 'done' },
            { label: 'Job Completed', time: 'Awaiting...', done: order.badge === 'done' },
          ].map(({ label, time, done }, i) => (
            <View key={i} style={{ flexDirection: 'row', gap: 12, marginBottom: 6 }}>
              <View style={{ alignItems: 'center' }}>
                <View style={[styles.tlDot, { backgroundColor: done ? COLORS.primary : COLORS.gray200 }]} />
                {i < 3 && <View style={[styles.tlLine, { backgroundColor: done ? COLORS.primary : COLORS.gray200 }]} />}
              </View>
              <View style={{ paddingBottom: 14 }}>
                <Text style={[styles.tlLabel, done && { color: COLORS.primary }]}>{label}</Text>
                <Text style={styles.tlTime}>{time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <AppButton
            title="Employee Details"
            iconName=""
            onPress={() => setShowEmp(true)}
            style={styles.outlineBtn}
            textStyle={styles.outlineBtnText}
          />

          <AppButton
            title="Download Invoice"
            iconName=""
            onPress={() => setShowInvoice(true)}
            style={[styles.primaryBtn, { marginTop: 10 }]}
            textStyle={styles.primaryBtnText}
          />

          {order.badge === 'done' && (

            <AppButton
              title="Rate This Service"
              iconName="star"
              onPress={() => navigation.navigate('RateReview', { order })}
              style={[styles.primaryBtn, { marginTop: 10, backgroundColor: COLORS.warning }]}
              textStyle={styles.primaryBtnText}
            />
          )}
        </View>
      </ScrollView>

      {/* Employee Details Modal */}
      <Modal visible={showEmp} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Employee Details</Text>
            <View style={styles.empRow}>
              <View style={styles.avatar}><Text style={styles.avatarText}>KP</Text></View>
              <View>
                <Text style={styles.empName}>Kamal Perera</Text>
                <Text style={styles.empRole}>Certified Technician · ★ 4.8</Text>
              </View>
            </View>
            {[
              { label: 'Contact Number', value: '077 123 4567' },
              { label: 'Name', value: 'Kamal Perera' },
              { label: 'Employee ID', value: 'EMP-0042' },
            ].map(({ label, value }) => (
              <View key={label} style={styles.modalRow}>
                <Text style={styles.modalLabel}>{label}</Text>
                <Text style={styles.modalValue}>{value}</Text>
              </View>
            ))}
            <TouchableOpacity style={[styles.primaryBtn, { marginTop: 16 }]} onPress={() => setShowEmp(false)}>
              <Text style={styles.primaryBtnText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Invoice Modal */}
      <Modal visible={showInvoice} transparent animationType="slide">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Invoice</Text>
            <Text style={styles.invoiceService}>{order.service}</Text>
            {[
              { label: 'Date', value: order.date },
              { label: 'Time', value: order.time },
            ].map(({ label, value }) => (
              <View key={label} style={styles.invRow}>
                <Text style={styles.invLabel}>{label}</Text>
                <Text style={styles.invValue}>{value}</Text>
              </View>
            ))}
            <View style={styles.invHeader}>
              <Text style={[styles.invLabel, { flex: 1, ...FONTS.semibold }]}>Items</Text>
              <Text style={styles.invLabel}>Qty</Text>
              <Text style={[styles.invLabel, { marginLeft: 24 }]}>Price</Text>
            </View>
            {[
              { item: 'Labour (3.5h)', qty: 1, price: 'Rs. 3,500' },
              { item: 'Parts & Materials', qty: 2, price: 'Rs. 1,800' },
              { item: 'Transport', qty: 1, price: 'Rs. 500' },
            ].map(({ item, qty, price }) => (
              <View key={item} style={styles.invRow}>
                <Text style={[styles.invLabel, { flex: 1 }]}>{item}</Text>
                <Text style={styles.invValue}>{qty}</Text>
                <Text style={[styles.invValue, { marginLeft: 16 }]}>{price}</Text>
              </View>
            ))}
            <View style={[styles.invRow, { borderTopWidth: 1, borderTopColor: COLORS.gray200, marginTop: 8, paddingTop: 10 }]}>
              <Text style={[styles.invLabel, { flex: 1, ...FONTS.semibold, fontSize: 14 }]}>Total</Text>
              <Text style={{ fontSize: 16, ...FONTS.bold, color: COLORS.primary }}>Rs. 5,800</Text>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 13, color: COLORS.gray400, marginTop: 12 }}>Thank you! 🙏</Text>
            <TouchableOpacity
              style={[styles.primaryBtn, { marginTop: 14 }]}
              onPress={() => { setShowInvoice(false); navigation.navigate('RateReview', { order }); }}
            >
              <Text style={styles.primaryBtnText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray50
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  backText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13
  },
  titleCard: {
    backgroundColor: COLORS.white,
    margin: 16,
    marginBottom: 8,
    borderRadius: RADIUS.lg,
    padding: 16,
    ...SHADOW.sm
  },
  orderService: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.gray800,
    flex: 1,
    marginRight: 8
  },
  orderId: {
    fontSize: 11,
    color: COLORS.gray400,
    marginTop: 4
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: RADIUS.full
  },
  badgeText: {
    fontSize: 11,
    ...FONTS.medium
  },
  infoCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    borderRadius: RADIUS.lg,
    paddingHorizontal: 16,
    marginBottom: 8,
    ...SHADOW.sm
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray200
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.gray400
  },
  infoValue: {
    fontSize: 13,
    ...FONTS.medium,
    color: COLORS.gray800
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: 16,
    ...SHADOW.sm
  },
  sectionTitle: {
    fontSize: 14,
    ...FONTS.semibold,
    color: COLORS.gray800,
    marginBottom: 12
  },
  descBox: {
    backgroundColor: COLORS.gray50,
    borderRadius: RADIUS.sm,
    padding: 12
  },
  descText: {
    fontSize: 13,
    color: COLORS.gray600,
    lineHeight: 20
  },
  imageRow: {
    flexDirection: 'row',
    gap: 10
  },
  imgBox: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.gray100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray200,
  },
  tlDot: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  tlLine: {
    width: 2,
    height: 20,
    marginTop: 2
  },
  tlLabel: {
    fontSize: 13,
    ...FONTS.medium,
    color: COLORS.gray800
  },
  tlTime: {
    fontSize: 11,
    color: COLORS.gray400,
    marginTop: 2
  },
  outlineBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 13,
    alignItems: 'center',
  },
  outlineBtnText: {
    color: COLORS.primary,
    fontSize: 14,
    ...FONTS.medium
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: 13,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: COLORS.white,
    fontSize: 14,
    ...FONTS.semibold
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end'
  },
  modalBox: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    padding: 24
  },
  modalTitle: {
    fontSize: 18,
    ...FONTS.semibold,
    color: COLORS.gray800,
    marginBottom: 16
  },
  empRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    fontSize: 16,
    ...FONTS.semibold,
    color: COLORS.primary
  },
  empName: {
    fontSize: 15,
    ...FONTS.semibold,
    color: COLORS.gray800
  },
  empRole: {
    fontSize: 12,
    color: COLORS.gray400
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray200
  },
  modalLabel: {
    fontSize: 12,
    color: COLORS.gray400
  },
  modalValue: {
    fontSize: 13,
    ...FONTS.medium,
    color: COLORS.gray800
  },
  invoiceService: {
    fontSize: 14,
    ...FONTS.semibold,
    color: COLORS.gray800,
    marginBottom: 12
  },
  invHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray200
  },
  invRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray100
  },
  invLabel: {
    fontSize: 12,
    color: COLORS.gray400
  },
  invValue: {
    fontSize: 12,
    ...FONTS.medium,
    color: COLORS.gray800
  },
});
