package com.Erp.repository;

import com.Erp.dto.FinancialChartData;
import com.Erp.dto.FinancialDto;
import com.Erp.entity.Financial;
import com.Erp.entity.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FinancialRepository extends JpaRepository<Financial, Long> {

    @Query(" select f from Financial f where f.year = :year order by f.quarter asc")
    List<Financial> findSearchList(@Param("year") Short year);

    @Query(" select f from Financial f where f.year = :year and f.quarter = :quarter")
    Financial findFinancialQuarter(@Param("year") Short year, @Param("quarter") Integer quarter);

    @Query(value = " select new com.Erp.dto.FinancialChartData(sum(f.total_assets), sum((f.cash + f.cash_equivalents + i.raw_mat_cost + i.components_cost + i.fixtures)), sum((f.real_estate + f.equipment + f.vehicles)), sum(f.paid_capital), sum(f.total_liabilities), sum(f.total_capital), f.year)" +
            " from Financial f" +
            " JOIN Income i ON f.incomes.id = i.id" +
            " group by f.year" +
            " order by f.year asc")
    List<FinancialChartData> findChartDataList();
}
