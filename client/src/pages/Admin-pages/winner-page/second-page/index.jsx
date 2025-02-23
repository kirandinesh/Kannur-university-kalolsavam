import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  collegeList,
  gradeOptions,
  winnerResultSecondInitialFormData,
} from "@/config";
import { AdminContext } from "@/context/admin-context";
import { Trash2Icon } from "lucide-react";
import { useContext } from "react";

function SecondWinnerPage() {
  const { secondWinnerFormData, setSecondWinnerFormData, isGroupToggled } =
    useContext(AdminContext);
  function handleNewStudents() {
    setSecondWinnerFormData([
      ...secondWinnerFormData,
      { ...winnerResultSecondInitialFormData[0] },
    ]);
  }

  function handleStudentNameChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...secondWinnerFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      studentName: event.target.value,
    };
    setSecondWinnerFormData(cpyWinnerFisrtFormdata);
  }

  function handlePointChange(event, currentIndex) {
    let cpyWinnerFisrtFormdata = [...secondWinnerFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      points: event.target.value,
    };
    setSecondWinnerFormData(cpyWinnerFisrtFormdata);
  }

  function handleCollegeNameChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...secondWinnerFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      collegeName: value,
    };
    setSecondWinnerFormData(cpyWinnerFisrtFormdata);
  }

  function handleGradeChange(value, currentIndex) {
    let cpyWinnerFisrtFormdata = [...secondWinnerFormData];
    cpyWinnerFisrtFormdata[currentIndex] = {
      ...cpyWinnerFisrtFormdata[currentIndex],
      grade: value,
    };
    setSecondWinnerFormData(cpyWinnerFisrtFormdata);
  }
  function handleDeleteStudent(index) {
    setSecondWinnerFormData((prevData) =>
      prevData.filter((_, i) => i !== index)
    );
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <Button onClick={handleNewStudents}>Add Students</Button>
        </div>
        <div className="flex  justify-center items-center">
          <h2 className="font-subHeading text-2xl">Second Prize</h2>
        </div>
      </CardHeader>
      {secondWinnerFormData.map((item, index) => (
        <CardContent key={index} className="border-b">
          {index > 0 ? (
            <div className="mt-2">
              <Trash2Icon
                color="red"
                size={30}
                className="cursor-pointer"
                onClick={() => handleDeleteStudent(index)}
              />
            </div>
          ) : null}
          <div className="flex justify-center mb-2">
            <h1> Student {index + 1} </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <Label>Student Name</Label>
              <Input
                type="text"
                placeholder="Enter student name..."
                name={`student-${index + 1}`}
                value={secondWinnerFormData[index]?.studentName}
                onChange={(event) => handleStudentNameChange(event, index)}
              />
            </div>
            <div>
              <Label>College Name</Label>
              <Select
                disabled={isGroupToggled}
                onValueChange={(value) => handleCollegeNameChange(value, index)}
                value={secondWinnerFormData[index]?.collegeName}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="College Name" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
                  {collegeList.map((college) => (
                    <SelectItem key={college.id} value={college.label}>
                      {college.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Grade</Label>
              <Select
                disabled={isGroupToggled}
                onValueChange={(value) => handleGradeChange(value, index)}
                value={secondWinnerFormData[index]?.grade}
              >
                <SelectTrigger
                  className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                >
                  <SelectValue placeholder="Grade Point" />
                </SelectTrigger>
                <SelectContent className="text-ellipsis overflow-hidden max-w-3xs  sm:max-w-lg">
                  {gradeOptions.map((grade) => (
                    <SelectItem key={grade.id} value={grade.label}>
                      {grade.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Point</Label>
              <Input
                disabled={isGroupToggled}
                className={`${isGroupToggled ? "bg-gray-300" : ""}`}
                type="number"
                placeholder="Enter point..."
                name={`point-${index + 1}`}
                value={secondWinnerFormData[index]?.points}
                onChange={(event) => handlePointChange(event, index)}
              />
            </div>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}

export default SecondWinnerPage;
